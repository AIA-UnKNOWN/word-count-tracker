@extends('index')

@section('content')
<div class="auth-container">
    <p class="auth-title">Login</p>
    <form method="POST" action="{{ route('login') }}">
        @csrf
        <div class="input-container">
            <input type="text" name="username" id="username"
                placeholder="Username" autofocus
            />
            @if($errors->has('username'))
            <label class="error-message">{{ $errors->first('username') }}</label>
            @endif
        </div>
        <div class="input-container">
            <input type="password" name="password" id="password"
                placeholder="Password" autofocus
            />
            @if($errors->has('password'))
            <label class="error-message">{{ $errors->first('password') }}</label>
            @endif
        </div>

        <p class="auth-link">Don't have an account? <a href="{{ route('register-page') }}">Register</a></p>

        <button type="submit">Login</button>
    </form>
</div>
@endsection