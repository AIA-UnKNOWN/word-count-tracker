@extends('index')

@section('content')
<div class="auth-container">
    <p class="auth-title">Register</p>
    <form method="POST" action="{{ route('register') }}">
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
            <input type="email" name="email" id="email"
                placeholder="Email" autofocus
            />
            @if($errors->has('email'))
            <label class="error-message">{{ $errors->first('email') }}</label>
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
        <div class="input-container">
            <input type="password" name="confirm-password" id="confirm-password"
                placeholder="Confirm Password" autofocus
            />
            @if($errors->has('confirm-password'))
            <label class="error-message">{{ $errors->first('confirm-password') }}</label>
            @endif
        </div>

        <p class="auth-link">Already have an account? <a href="{{ route('login-page') }}">Login</a></p>

        <button type="submit">Login</button>
    </form>
</div>
@endsection