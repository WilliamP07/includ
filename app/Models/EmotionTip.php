<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class EmotionTip extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'emotion_tips';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id', 'tip_title', 'tip_description', 'status', 'deleted_at', 'created_at', 'updated_at', 
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return EmotionTip::select('emotion_tips.*', 'emotion_tips.id as id')
        
		->where('emotion_tips.tip_title', 'like', $search)

        ->skip($skip)
        ->take($itemsPerPage)
        ->orderBy("emotion_tips.$sortBy", $sort)
        ->get();
    }

    public static function counterPagination($search)
    {
        return EmotionTip::select('emotion_tips.*', 'emotion_tips.id as id')
        
		->where('emotion_tips.tip_title', 'like', $search)

        ->count();
    }
}
