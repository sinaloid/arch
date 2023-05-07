<?php

namespace App\Models\Countries;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Country extends Model
{
    use HasFactory;

    protected $fillable = [
        'country_name',
        //'continent',
        'indicatif',
        'slug',
    ];
    public function users() {

        return $this->hasMany(User::class);
    }
    public function regions() {

        return $this->hasMany(Region::class);
    }
}
