<?php

namespace App\Models\Countries;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Region extends Model
{
    use HasFactory;

    protected $fillable = [
        'country_id',
        'region_name',
        'slug',
    ];

    public function users() {

        return $this->hasMany(User::class);
    }
    
    public function country() {

        return $this->belongsTo(Country::class);
    }

    public function provinces() {

        return $this->hasMany(Province::class);
    }
}
