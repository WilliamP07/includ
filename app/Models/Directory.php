<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Directory extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'directories';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id', 'name', 'phone', 'address', 'zone_id', 'status', 'deleted_at', 'created_at', 'updated_at', 
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return Directory::select('directories.*', 'zones.*', 'directories.id as id')
        ->join('zones', 'directories.zone_id', '=', 'zones.id')

		->where('directories.name', 'like', $search)

        ->skip($skip)
        ->take($itemsPerPage)
        ->orderBy("directories.$sortBy", $sort)
        ->get();
    }

    public static function counterPagination($search)
    {
        return Directory::select('directories.*', 'zones.*', 'directories.id as id')
        ->join('zones', 'directories.zone_id', '=', 'zones.id')

		->where('directories.name', 'like', $search)

        ->count();
    }
}
