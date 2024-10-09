@extends('layouts.app')

@section('content')
    @if (env('LOCAL_LOGIN'))
        <register />
    @endif
@endsection
