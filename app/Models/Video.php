<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'videos';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id',
        'video_title',
        'video_description',
        'show_in',
        'link',
        'status',
        'deleted_at',
        'created_at',
        'updated_at',
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return Video::select('videos.*', 'videos.id as id')

            ->where('videos.link', 'like', $search)

            ->skip($skip)
            ->take($itemsPerPage)
            ->orderBy("videos.$sortBy", $sort)
            ->get();
    }

    public static function counterPagination($search)
    {
        return Video::select('videos.*', 'videos.id as id')

            ->where('videos.link', 'like', $search)

            ->count();
    }
}
