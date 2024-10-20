<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class ImageFile extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'image_file';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id', 'image_file_title', 'image_file_content', 'image_file_description', 'image_file_status', 'image_file_shows_in', 'created_at', 'updated_at', 
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return ImageFile::select('image_file.*', 'image_file.id as id')
        
		->where('image_file.image_file_title', 'like', $search)

        ->skip($skip)
        ->take($itemsPerPage)
        ->orderBy("image_file.$sortBy", $sort)
        ->get();
    }

    public static function counterPagination($search)
    {
        return ImageFile::select('image_file.*', 'image_file.id as id')
        
		->where('image_file.image_file_title', 'like', $search)

        ->count();
    }
}
