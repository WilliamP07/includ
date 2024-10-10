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

                <li class="text-center mt-5 mb-5">
                    <a href="{{ url('/home') }}">
                    <p class="link my-2 mx-auto fw-bold text-black" style="font-size: 34px">Pinspire</p>
                    </a>
                </li>

                @auth
                    <!-- Home -->
                    <li class="text-center pb-1 mt-5 mb-5">
                        <a href="{{ url('/home') }}">
                            <p class="link mx-auto mx-2 my-4 fw-bold text-black" style="font-size: 16px;">Inicio</p>
                            <p class="link mx-auto mx-2 my-4 fw-bold text-black" style="font-size: 16px;">Crear</p>
                        </a>
                    </li>
                    <!-- Home -->
                    <!-- Home -->
                    <li class="text-center pb-1 mt-5 mb-5" style="background-color: #d9c6dc !important; border-radius: 8px;">
                        <a href="{{ url('/home') }}">
                            <p class="link mx-2 my-2 text-black fw-bold" style="font-size: 14px">Opción 1</p>
                        </a>
                    </li>
                    <!-- Home -->
                    <!-- notifications -->
                    <li class="text-center pb-1 mt-5">
                        <a href="{{ url('/home') }}" class="text-center">
                            <i class="material-icons md-18 mx-auto">notifications</i>
                        </a>
                    </li>
                    <!-- notifications -->
                    <!-- Comment -->
                    <li class="text-center pb-1">
                        <a href="{{ url('/home') }}" class="text-center">
                            <i class="material-icons md-18 mx-auto">comment</i>
                        </a>
                    </li>
                    <!-- Comment -->
                    <!-- person -->
                    <li class="text-center pb-1">
                        <a href="{{ url('/profile') }}" class="text-center">
                            <i class="material-icons md-18 mx-auto">person</i>
                        </a>
                    </li>
                    <!-- person -->
                    <!-- Logout -->
                    <li class="text-center pb-1">
                        <a href="{{ route('register') }}" class="text-center"
                            onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                            <i class="material-icons md-18 mx-auto">logout</i>
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
