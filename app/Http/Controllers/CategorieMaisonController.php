<?php

namespace App\Http\Controllers;

use App\Models\CategorieMaison;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategorieMaisonController extends Controller
{
    // Afficher la liste des catégories de maisons
    public function index()
    {
        $categories = CategorieMaison::all();
        return response()->json($categories);
    }

    // Créer une nouvelle catégorie de maison
    public function store(Request $request)
    {
        // Vérifier que les champs obligatoires sont remplis
        $validatedData = $request->validate([
            'nom' => 'required|max:255',
            'description' => 'required',
        ]);
//dd($request->all());
        // Créer la nouvelle catégorie de maison
        $categorie = new CategorieMaison;
        $categorie->nom = $request->input('nom');
        $categorie->description = $request->input('description');
        $categorie->user_id = Auth::user()->id;
        $categorie->save();

        return response()->json(['message' => 'Catégorie créée avec succès', 'categorie' => $categorie]);
    }

    // Afficher les détails d'une catégorie de maison
    public function show($id)
    {
        $categorie = CategorieMaison::find($id);
        if (!$categorie) {
            return response()->json(['message' => 'Catégorie non trouvée'], 404);
        }
        return response()->json($categorie);
    }

    // Mettre à jour une catégorie de maison existante
    public function update(Request $request, $id)
    {
        // Vérifier que les champs obligatoires sont remplis
        $validatedData = $request->validate([
            'nom' => 'required|max:255',
            'description' => 'required',
        ]);

        // Trouver la catégorie de maison à mettre à jour
        $categorie = CategorieMaison::find($id);
        if (!$categorie) {
            return response()->json(['message' => 'Catégorie non trouvée'], 404);
        }

        // Mettre à jour la catégorie de maison
        $categorie->nom = $request->input('nom');
        $categorie->description = $request->input('description');
        $categorie->save();

        return response()->json(['message' => 'Catégorie mise à jour avec succès', 'categorie' => $categorie]);
    }

    // Supprimer une catégorie de maison existante
    public function destroy($id)
    {
        // Trouver la catégorie de maison à supprimer
        $categorie = CategorieMaison::find($id);
        if (!$categorie) {
            return response()->json(['message' => 'Catégorie non trouvée'], 404);
        }

        // Supprimer la catégorie de maison
        $categorie->delete();

        return response()->json(['message' => 'Catégorie supprimée avec succès']);
    }
}
