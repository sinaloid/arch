<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ressource extends Model
{
    use HasFactory;
    protected $fillable = [
        "nom",
        "type",
        "categorie_maison_id",
        "maison_id",
    ];

    public function categorieMaison()
    {
        return $this->belongsTo(CategorieMaison::class);
    }

    public function maison()
    {
        return $this->belongsTo(Maison::class);
    }
}
