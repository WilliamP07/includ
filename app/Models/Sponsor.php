<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Sponsor extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'sponsors';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id', 'sponsor_name', 'sponsor_image', 'sponsor_description', 'status', 'deleted_at', 'created_at', 'updated_at', 
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return Sponsor::select('sponsors.*', 'sponsors.id as id')
        
		->where('sponsors.sponsor_name', 'like', $search)

        ->skip($skip)
        ->take($itemsPerPage)
        ->orderBy("sponsors.$sortBy", $sort)
        ->get();
    }

    public static function counterPagination($search)
    {
        return Sponsor::select('sponsors.*', 'sponsors.id as id')
        
		->where('sponsors.sponsor_name', 'like', $search)

        ->count();
    }
}
