@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1 class="fw-bold">Explorar lo mejor de Pinterest</h1>
        </div>
        <div class="cols-12 col-sm-6 col-md-4">
            <a href="https://es.pinterest.com/" target="_blank">
                <div class="discover-1">
                    <div class="discover">
                        <p class="text-white text-center mb-0">Nunca fue solo una fase</p>
                        <h2 class="fw-bold text-white text-center">Decoraciones al estilo gótico</h2>
                    </div>
                </div>
            </a>
        </div>
        <div class="cols-12 col-sm-6 col-md-4">
            <a href="https://es.pinterest.com/" target="_blank">
                <div class="discover-2">
                    <div class="discover">
                        <p class="text-white text-center mb-0">Nunca fue solo una fase</p>
                        <h2 class="fw-bold text-white text-center">Decoraciones al estilo gótico</h2>
                    </div>
                </div>
            </a>
        </div>
        <div class="cols-12 col-sm-6 col-md-4">
            <a href="https://es.pinterest.com/" target="_blank">
            <div class="discover-3">
                <div class="discover">
                    <p class="text-white text-center mb-0">Nunca fue solo una fase</p>
                    <h2 class="fw-bold text-white text-center">Decoraciones al estilo gótico</h2>
                </div>
            </div>
            </a>
        </div>
         <div class="col-md-3 offset-md-4 mx-auto">
               <a href="{{ url('/login') }}" class="btn btn-normal-close shadow-none fw-bold w-100">Ver más</a>
        </div>
        <div class="col-md-12 pt-5">
            <h1 class="fw-bold">Mira las novedades de Pinterest</h1>
        </div>
        {{-- posts component --}}
        <div class="col-md-12">
            <posts />
        </div>
        {{-- posts component --}}
    </div>
</div>
@endsection
