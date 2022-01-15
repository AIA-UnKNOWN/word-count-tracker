@extends('index')

@section('content')
    <div id="root" data-id="{{ Auth::user()->id }}"></div>
    <script src="{{ asset('/js/index.js') }}"></script>
@endsection