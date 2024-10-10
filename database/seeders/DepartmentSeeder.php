<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Department::insert([
            [
                "id" => 1,
                "department_name" => "Ahuachapán",
            ],
            [
                "id" => 2,
                "department_name" => "Santa Ana",
            ],
            [
                "id" => 3,
                "department_name" => "Sonsonate",
            ],
            [
                "id" => 4,
                "department_name" => "Chalatenango",
            ],
            [
                "id" => 5,
                "department_name" => "La Libertad",
            ],
            [
                "id" => 6,
                "department_name" => "San Salvador",
            ],
            [
                "id" => 7,
                "department_name" => "Cuscatlán",
            ],
            [
                "id" => 8,
                "department_name" => "La Paz",
            ],
            [
                "id" => 9,
                "department_name" => "Cabañas",
            ],
            [
                "id" => 10,
                "department_name" => "San Vicente",
            ],
            [
                "id" => 11,
                "department_name" => "Usulután",
            ],
            [
                "id" => 12,
                "department_name" => "San Miguel",
            ],
            [
                "id" => 13,
                "department_name" => "Morazán",
            ],
            [
                "id" => 14,
                "department_name" => "La Unión",
            ],

        ]);
    }
}
