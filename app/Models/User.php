<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements MustVerifyEmail, JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    protected $table = 'users';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id',
        'name',
        'email',
        'alias',
        'birth_date',
        'gender_id',
        'department_id',
        'password',
        'email_verified_at',
        'remember_token',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    // protected $casts = [
    //     'email_verified_at' => 'datetime',
    // ];

    public $timestamps = true;

    public static function allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage)
    {
        return User::select('users.*', 'genders.*', 'departments.*', 'users.id as id')
            ->join('genders', 'users.gender_id', '=', 'genders.id', 'left outer')
            ->join('departments', 'users.department_id', '=', 'departments.id', 'left outer')

            ->where('users.email', 'like', $search)
            ->orWhere('users.name', 'like', $search)

            ->skip($skip)
            ->take($itemsPerPage)
            ->orderBy("users.$sortBy", $sort)
            ->get();
    }

    public static function counterPagination($search)
    {
        return User::select('users.*', 'genders.*', 'departments.*', 'users.id as id')
            ->join('genders', 'users.gender_id', '=', 'genders.id', 'left outer')
            ->join('departments', 'users.department_id', '=', 'departments.id', 'left outer')

            ->where('users.email', 'like', $search)
            ->orWhere('users.name', 'like', $search)

            ->count();
    }

    public function sendEmailVerificationNotification()
    {
        $this->notify(new \App\Notifications\VerifyEmailQueued);
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
