<?php

namespace App\Http\Controllers;

use App\Models\Maison;
use App\Models\Ressource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class MaisonController extends Controller
{
    public function index()
    {
        $maisons = Maison::with("ressources")->get();
        return response()->json(['maisons' => $maisons], 200);
    }

    public function show($id)
    {
        //$maison = Maison::find($id);
        $maison = Maison::with("ressources")->find($id);
        if ($maison) {
            return response()->json(['maison' => $maison], 200);
        } else {
            return response()->json(['error' => 'Maison non trouvée.'], 404);
        }
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        
        $validator = Validator::make($request->all(), [
            'nom' => 'required|string|max:255',
            'adresse' => 'required|string|max:255',
            'description' => 'required|string',
            'nombre_chambres' => 'required|integer|min:1',
            'nombre_douches' => 'required|integer|min:1',
            'nombre_cuisines' => 'required|integer|min:1',
            'prix' => 'required|numeric|min:0',
            'categorie_maison_id' => 'required|exists:categorie_maisons,id'
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $request['user_id'] = $user->id;

        $maison = Maison::create($request->all());

        // Mettre à jour l'image de la maison si elle a été fournie
        if ($request->hasFile('images')) {
            $images = $request->file('images');
            foreach($images as $image){

                $imageName = Str::random(10) . '.' . $image->getClientOriginalExtension();

                $path = $image->move(public_path('maisons/images'), $imageName);

                $ressource = new Ressource();

                $ressource->type = "image";
                $ressource->nom = $imageName;
                $ressource->maison_id = $maison->id;
                $ressource->save();

            }
            
        }

        if ($request->hasFile('video')) {
            $video = $request->file('video');
            $videoName = Str::random(10) . '.' . $video->getClientOriginalExtension();
            $path = $video->move(public_path('maisons/videos'), $videoName);
            $ressource = new Ressource();
            $ressource->type = "video";
            $ressource->nom = $videoName;
            $ressource->maison_id = $maison->id;
            $ressource->save();
            
        }
        

        return response()->json(['maison' => $maison], 201);
    }

    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $validator = Validator::make($request->all(), [
            'nom' => 'required|string|max:255',
            'adresse' => 'required|string|max:255',
            'description' => 'required|string',
            'nombre_chambres' => 'required|integer|min:1',
            'nombre_douches' => 'required|integer|min:1',
            'nombre_cuisines' => 'required|integer|min:1',
            'prix' => 'required|numeric|min:0',
            'categorie_maison_id' => 'required|exists:categorie_maisons,id'
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $maison = Maison::find($id);
        if (!$maison) {
            return response()->json(['message' => 'Maison non trouvée'], 404);
        }
        $maison->nom = $request->input('nom');
        $maison->adresse = $request->input('adresse');
        $maison->description = $request->input('description');
        $maison->nombre_chambres = $request->input('nombre_chambres');
        $maison->nombre_douches = $request->input('nombre_douches');
        $maison->nombre_cuisines = $request->input('nombre_cuisines');
        $maison->prix = $request->input('prix');
        $maison->categorie_maison_id = $request->input('categorie_maison_id');
        $maison->user_id = $user->id;

        $maison->save();

        return response()->json(['message' => 'Maison mise à jour avec succès', 'categorie' => $maison]);
    }

    // Supprimer une catégorie de maison existante
    public function destroy($id)
    {
        // Trouver la catégorie de maison à supprimer
        $maison = Maison::find($id);
        if (!$maison) {
            return response()->json(['message' => 'Maison non trouvée'], 404);
        }

        // Supprimer la catégorie de maison
        $maison->delete();

        return response()->json(['message' => 'Maison supprimée avec succès']);
    }
}
