<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        'user_id'
    ];
}
