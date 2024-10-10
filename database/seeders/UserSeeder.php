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
            'email' => 'usuario@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);
        $user->assignRole($rolUser);

        $authorizer = User::create([
            'id' => 2,
            'name' => 'Autorizador',
            'email' => 'autorizador@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);
        $authorizer->assignRole($rolAuthorizer);

        $admin = User::create([
            'id' => 3,
            'name' => 'Administrador',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);
        $admin->assignRole($rolAdmin);
    }
}
