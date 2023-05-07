<?php

namespace App\Models\Countries;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Province extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'region_id',
        'province_name',
        'slug',
    ];

    public function users() {

        return $this->hasMany(User::class);
    }

    public function region() {

        return $this->belongsTo(Region::class);
    }

    public function communes() {

        return $this->hasMany(Commune::class);
    }
}
