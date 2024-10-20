<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SocialNetworks extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'social_networks';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id',
        'company',
        'facebook',
        'youtube',
        'tiktok',
        'instagram',
        'x',
        'directory_id',
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
}
