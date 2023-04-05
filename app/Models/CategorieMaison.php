<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategorieMaison extends Model
{
    use HasFactory;
    protected $fillable = [
        "nom",
        "description"
    ];
}
