<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Base') }}</title>

    <!-- Scripts -->
    <script src="{{ mix('js/manifest.js') }}" defer></script>
    <script src="{{ mix('js/vendor.js') }}" defer></script>
    <script src="{{ mix('js/app.js') }}" defer></script>
    <script src="{{ asset('js/sidebar.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('logos/logo-includ.png') }}">
    @yield('css')

    @yield('header')
</head>

<body>
    <div id="app">
        <!-- Sidebar -->
        <div class="sidebar animate__faster animate__animated animate__slideOutLeft">
            <ul class="nav-links pt-0">
                <li class="text-center close-btn">
                    <i class="material-icons md-36 mx-auto  mt-0 pt-0">menu</i>
                </li>

                @auth
                    <!-- Home -->
                      <li class="text-center pb-1">
                        <a href="{{ url('/home') }}" class="text-center">
                            <i class="material-icons md-18 mx-auto">dashboard</i>
                        </a>
                        <a href="{{ url('/home') }}">
                            <p class="link mx-auto text-white fw-bold">Dashboard</p>
                        </a>
                    </li>
                    <!-- Home -->

                    <!-- directories -->
                      <li class="text-center pb-1">
                        <a href="{{ url('/directories') }}" class="text-center">
                            <i class="material-icons md-18 mx-auto">auto_stories</i>
                        </a>
                        <a href="{{ url('/directories') }}">
                            <p class="link mx-auto text-white fw-bold">Directorio</p>
                        </a>
                    </li>
                    <!-- directories -->

                    <!-- games -->
                      <li class="text-center pb-1">
                        <a href="{{ url('/games') }}" class="text-center">
                            <i class="material-icons md-18 mx-auto">sports_esports</i>
                        </a>
                        <a href="{{ url('/games') }}">
                            <p class="link mx-auto text-white fw-bold">Juegos</p>
                        </a>
                    </li>
                    <!-- games -->

                    <!-- modules -->
                      <li class="text-center pb-1">
                        <a href="{{ url('/modules') }}" class="text-center">
                            <i class="material-icons md-18 mx-auto">layers</i>
                        </a>
                        <a href="{{ url('/modules') }}">
                            <p class="link mx-auto text-white fw-bold">Módulos</p>
                        </a>
                    </li>
                    <!-- modules -->

                       @if (auth()->user()->hasRole('Administrador') == 'Administrador')
                        <li>
                            <div class="icon-link pb-1">
                                <a href="#" class="arrow text-center">
                                    <i class="material-icons md-18 mx-auto">settings</i>
                                </a>
                                <p class="link text-white fw-bold" style="padding-left: 4px;">Administración</p>
                            </div>
                            <ul class="sub-menu">
                                <li><a class="text-white fw-bold" href="{{ url('/genders') }}">Géneros</a></li>
                                <li><a class="text-white fw-bold" href="{{ url('/interests') }}">Intereses</a></li>
                                <li><a class="text-white fw-bold" href="{{ url('/sponsors') }}">Patrocinadores</a></li>
                                <li><a class="text-white fw-bold" href="{{ url('/zones') }}">Zonas</a></li>
                                <li><a class="text-white fw-bold" href="{{ url('/departments') }}">Departamentos</a></li>
                                <li><a class="text-white fw-bold" href="{{ url('/emotion-tips') }}">Consejos</a></li>
                                <li><a class="text-white fw-bold" href="{{ url('/emotions') }}">Emociones</a></li>
                                <li><a class="text-white fw-bold" href="{{ url('/users') }}">Usuarios</a></li>
                                <li><a class="text-white fw-bold" href="{{ url('/images') }}">Imágenes</a></li>
                                <li><a class="text-white fw-bold" href="{{ url('/videos') }}">Videos</a></li>
                            </ul>
                        </li>
                    @endif
               
                  <!-- Logout -->
                    <li class="text-center pb-1">
                        <a href="{{ route('register') }}" class="text-center"
                            onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                            <i class="material-icons md-18 mx-auto">logout</i>
                        </a>
                        <a href="{{ route('logout') }}"
                            onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                            <p class="link mx-auto text-white fw-bold">Cerrar sesión</p>
                        </a>
                    </li>
                    <!-- Logout -->
                @endauth

                <!-- Login/Logout -->
                @guest
                    <li class="text-center pb-1">
                        <a href="{{ url('/login') }}" class="text-center">
                            <i class="material-icons md-18 mx-auto">login</i>
                        </a>
                        <a href="{{ url('/login') }}">
                            <p class="link mx-auto">Iniciar sesión</p>
                        </a>
                    </li>

                    @if (Route::has('register'))
                        <li class="text-center pb-1">
                            <a href="{{ url('/register') }}" class="text-center">
                                <i class="material-icons md-18 mx-auto">person_add_alt_1</i>
                            </a>
                            <a href="{{ url('/register') }}">
                                <p class="link mx-auto">Registrarse</p>
                            </a>
                        </li>
                    @endif
                @endguest
                <!-- Login/Logout -->
            </ul>
        </div>
        <!-- Sidebar -->

        <!-- Home Section -->
        <div class="home-section">
            <div class="home-content pt-5 pb-5">
                <div class="container-fluid">
                    <div class="col-6 col-sm-12 col-md-12">
                        <div class="row p-0 m-0">
                            @auth
                                <div class="col-6 col-md-1 menu my-auto">
                                    <div class="col-3 col-sm-3 menu my-auto">
                                        <i class="material-icons md-36 mx-auto menu color-secondary my-auto">menu</i>
                                    </div>
                                </div>
                            @endauth
                            @guest
                                <div class="col-6 col-md-1 menu pt-0 mt-0 d-block d-md-none d-lg-none d-xl-none">
                                    <div class="col-3 col-sm-3 menu">
                                        <i class="material-icons md-36 mx-auto menu color-secondary">menu</i>
                                    </div>
                                </div>
                            @endguest

                            <!-- Institution Name -->
                            <div class=" col-sm-4 col-md-6 d-none d-md-block d-lg-block d-xl-block">
                                <div class="col-4 col-sm-12" style="display: flex; align-items:center">
                                    {{-- <img src="logos/logo-includ.png" alt="" class="me-2" height="30" width="30"> --}}
                                    <a class="navbar-brand" href="#">
                                        <h3 class="fw-bold text-primary mb-0">
                                            {{getenv('APP_NAME')}}
                                        </h3>
                                    </a>
                                </div>
                            </div>
                            <!-- Institution Name -->

                            @guest
                                <div class="col-6 col-md-6 text-right d-none d-md-block d-lg-block d-xl-block">
                                    <div class="row mt-2 pt-1">
                                        <div class=" col-md-12 text-end">
                                            <a href="{{ url('/login') }}" class="btn btn-rounded-primary shadow-none">Iniciar
                                                sesión</a>
                                            <a href="{{ route('register') }}"
                                                class="btn btn-outlined-primary shadow-none">Registrarme</a>
                                        </div>

                                    </div>
                                </div>
                            @endguest

                            @auth
                                <!-- Logout/UserName -->
                                <div class="col-6 col-md-4 col-sm-4 d-none d-md-block d-lg-block d-xl-block">
                                    <div class="row d-none d-md-block">
                                        <div class="col-12 col-sm-12 col-md-12 pb-0 text-end">
                                            <a href="{{ url('/profile') }}">
                                                <span class="color-secondary" style="font-size: 16px;">
                                                    {{ auth()->user()->name }}
                                                </span>
                                                <span class="color-primary"><i class="material-icons">person</i></span>
                                            </a>
                                        </div>

                                        <div class="col-12 col-sm-12 col-md-12 pt-0 pb-0 text-end">
                                            <a href="{{ route('logout') }}" class="btn-logout"
                                                onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                                {{ __('Logout') }}
                                            </a>
                                            <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                                class="d-none">
                                                @csrf
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- Logout/UserName -->
                            @endauth
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Home Section -->

        <!-- Main -->
        <main class="main content py-4">
            @yield('content')
        </main>
        <!-- Main -->

        <!-- Footer  -->
        <footer-vue />
        <!-- Footer  -->
    </div>

    <!-- Scripts -->
    @yield('scripts')
</body>

</html>
