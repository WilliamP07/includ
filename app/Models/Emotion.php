<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Emotion extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'emotions';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id', 'emotion', 'deleted_at', 'created_at', 'updated_at', 
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return Emotion::select('emotions.*', 'emotions.id as id')
        
		->where('emotions.emotion', 'like', $search)

        ->skip($skip)
        ->take($itemsPerPage)
        ->orderBy("emotions.$sortBy", $sort)
        ->get();
    }

    public static function counterPagination($search)
    {
        return Emotion::select('emotions.*', 'emotions.id as id')
        
		->where('emotions.emotion', 'like', $search)

        ->count();
    }
}
