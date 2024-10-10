<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'genders';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id', 'gender', 'deleted_at', 'created_at', 'updated_at', 
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return Gender::select('genders.*', 'genders.id as id')
        
		->where('genders.gender', 'like', $search)

        ->skip($skip)
        ->take($itemsPerPage)
        ->orderBy("genders.$sortBy", $sort)
        ->get();
    }

    public static function counterPagination($search)
    {
        return Gender::select('genders.*', 'genders.id as id')
        
		->where('genders.gender', 'like', $search)

        ->count();
    }
}
