<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Countries\Commune;

class Maison extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'adresse',
        'description',
        'nombre_chambres',
        'nombre_douches',
        'nombre_cuisines',
        'prix',
        'categorie_maison_id',
        'user_id',
        'commune_id',
        'secteur',
        'longitude',
        'latitude'
    ];

    public function ressources(){
        return $this->hasMany(Ressource::class);
    }

    public function commune(){
        return $this->belongsTo(Commune::class);
    }

    public function categorieMaison(){
        return $this->belongsTo(CategorieMaison::class);
    }
}
