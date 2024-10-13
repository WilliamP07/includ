<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('emotion_tips', function (Blueprint $table) {
            $table->id();
            $table->string("tip_title");
            $table->string("tip_description");
            $table->foreignId('emotion_id')->constrained('emotions');
            $table->tinyInteger("status")->comment("1 = public, 0 = private")->default(0);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('emotion_tips');
    }
};
