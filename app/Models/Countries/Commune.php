<?php

namespace App\Models\Countries;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Datas\Data;
use App\Models\User;

class Commune extends Model
{
    use HasFactory;

    protected $fillable = [
        'commune_name',
        'province_id',
        'slug'
    ];
    /*liaison à la table province, data, user */
    public function province() {

        return $this->belongsTo(Province::class);
    }

}
