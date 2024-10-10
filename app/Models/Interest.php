<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Interest extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'interests';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id', 'interest', 'status', 'created_at', 'updated_at', 'deleted_at', 
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return Interest::select('interests.*', 'interests.id as id')
        
		->where('interests.interest', 'like', $search)

        ->skip($skip)
        ->take($itemsPerPage)
        ->orderBy("interests.$sortBy", $sort)
        ->get();
    }

    public static function counterPagination($search)
    {
        return Interest::select('interests.*', 'interests.id as id')
        
		->where('interests.interest', 'like', $search)

        ->count();
    }
}
