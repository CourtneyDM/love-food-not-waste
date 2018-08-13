import history from './history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';



export default class Auth {
    auth0 = new auth0.WebAuth( {
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientId,
        redirectUri: AUTH_CONFIG.callbackUrl,
        audience: `https://${AUTH_CONFIG.domain}/userinfo`,
        responseType: 'token id_token',
        scope: 'openid profile'
    } );

    constructor() {
        this.login = this.login.bind( this );
        this.logout = this.logout.bind( this );
        this.handleAuthentication = this.handleAuthentication.bind( this );
        this.isAuthenticated = this.isAuthenticated.bind( this );
        this.getIdToken = this.getIdToken.bind( this );
        this.getProfile = this.getProfile.bind( this );
    }

    userProfile;

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash( ( err, authResult ) => {
            if ( authResult && authResult.accessToken && authResult.idToken ) {
                this.setSession( authResult );
                history.replace( '/' );
            } else if ( err ) {
                history.replace( '/' );
                console.log( err );
                alert( `Error: ${err.error}. Check the console for further details.` );
            }
        } );
    }

    setSession( authResult ) {
        console.log( authResult )
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify( ( authResult.expiresIn * 1000 ) + new Date().getTime() );
        localStorage.setItem( 'access_token', authResult.accessToken );
        localStorage.setItem( 'id_token', authResult.idToken );
        localStorage.setItem( 'expires_at', expiresAt );
        localStorage.setItem('userId',authResult.idTokenPayload.sub);
        localStorage.setItem( 'nickname', authResult.idTokenPayload.nickname );
        // navigate to the home route
        history.replace( '/' );
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem( 'access_token' );
        localStorage.removeItem( 'id_token' );
        localStorage.removeItem( 'expires_at' );
        localStorage.removeItem( 'nickname' );
        localStorage.removeItem( 'userId' );
        // navigate to the home route
        history.replace( '/' );

    }

    isAuthenticated() {
        // Check whether the current time is past the 
        // access token's expiry time
        let expiresAt = JSON.parse( localStorage.getItem( 'expires_at' ) );
        return new Date().getTime() < expiresAt;
    }

    getIdToken() {
        // First, check if there is already a JWT in local storage
        var idToken = localStorage.getItem( 'id_token' );
        var authHash = this.lock.parseHash( window.location.hash );
        // If there is no JWT in local storage and there is one in the URL hash,
        // save it in local storage
        if ( !idToken && authHash ) {
            if ( authHash.id_token ) {
                idToken = authHash.id_token
                localStorage.setItem( 'id_token', authHash.id_token );
            }
            if ( authHash.error ) {
                // Handle any error conditions
                console.log( "Error signing in", authHash );
            }
        }
        return idToken
    }

    getAccessToken() {
        const accessToken = localStorage.getItem( 'access_token' );
        if ( !accessToken ) {
            throw new Error( 'No Access Token found' );
        }
        return accessToken;
    }


    getProfile( cb ) {
        let accessToken = this.getAccessToken();
        this.auth0.client.userInfo( accessToken, ( err, profile ) => {
            if ( profile ) {
                this.userProfile = profile;
                console.log( profile )
            }
            cb( err, profile );
        } );
    }
}
