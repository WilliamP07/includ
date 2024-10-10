<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Zone extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'zones';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id', 'zone_name', 'deleted_at', 'created_at', 'updated_at', 
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return Zone::select('zones.*', 'zones.id as id')
        
		->where('zones.zone_name', 'like', $search)

        ->skip($skip)
        ->take($itemsPerPage)
        ->orderBy("zones.$sortBy", $sort)
        ->get();
    }

    public static function counterPagination($search)
    {
        return Zone::select('zones.*', 'zones.id as id')
        
		->where('zones.zone_name', 'like', $search)

        ->count();
    }
}
