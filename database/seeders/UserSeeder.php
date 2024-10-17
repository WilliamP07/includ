<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $rolUser = Role::findOrFail(1);
        $rolAuthorizer = Role::findOrFail(2);
        $rolAdmin = Role::findOrFail(3);

        $user = User::create([
            'id' => 1,
            'name' => 'Usuario',
            'alias' => 'Fulanito',
            'gender_id' => 1,
            'department_id' => 1,
            'birth_date' => '2000-10-01',
            'email' => 'usuario@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);
        $user->assignRole($rolUser);

        $authorizer = User::create([
            'id' => 2,
            'name' => 'Autorizador',
            'alias' => 'Fulanito',
            'gender_id' => 3,
            'department_id' => 3,
            'birth_date' => '2000-10-01',
            'email' => 'autorizador@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);
        $authorizer->assignRole($rolAuthorizer);

        $admin = User::create([
            'id' => 3,
            'name' => 'Administrador',
            'alias' => 'Fulanito',
            'gender_id' => 2,
            'department_id' => 6,
            'birth_date' => '2000-10-01',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);
        $admin->assignRole($rolAdmin);
    }
}
