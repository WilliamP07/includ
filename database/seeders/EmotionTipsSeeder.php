<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\EmotionTip;

class EmotionTipsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EmotionTip::insert([
            [
                'id' => 1,
                'tip_title' => 'Identifica los desencadenantes',
                'tip_description' => 'Presta atención a las situaciones o personas que provocan ciertas emociones en ti. Esto te ayudará a anticiparlas y lidiar con ellas.',
                'emotion_id' => 1,
                'status' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 2,
                'tip_title' => 'Practica la meditación',
                'tip_description' => 'Dedicar unos minutos al día a la meditación puede ayudarte a calmar la mente y a observar tus emociones sin juzgarlas.',
                'emotion_id' => 2,
                'status' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 3,
                'tip_title' => 'Utiliza técnicas de relajación',
                'tip_description' => 'Técnicas como la meditación, el yoga o la relajación progresiva pueden reducir el estrés y mejorar tu bienestar emocional.',
                'emotion_id' => 3,
                'status' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 4,
                'tip_title' => 'Crea un espacio seguro para expresar tus emociones',
                'tip_description' => 'Encuentra un lugar donde te sientas cómodo para expresar tus sentimientos, ya sea a través de la escritura, el arte o simplemente hablando contigo mismo.',
                'emotion_id' => 4,
                'status' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 5,
                'tip_title' => 'Desarrolla habilidades de comunicación emocional',
                'tip_description' => 'Aprender a expresar tus emociones de manera clara y asertiva puede mejorar tus relaciones y reducir malentendidos.',
                'emotion_id' => 5,
                'status' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 6,
                'tip_title' => 'Utiliza afirmaciones positivas.',
                'tip_description' => 'Repetir frases afirmativas puede ayudarte a cambiar la perspectiva y fomentar una mentalidad más positiva ante las emociones negativas.',
                'emotion_id' => 6,
                'status' => 1,
                'created_at' => now(),
            ],
        ]);
    }
}
