DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'vap',
        'USER': 'vap_user',
        'PASSWORD': 'vap2018',
        'HOST': '127.0.0.1',
        'OPTIONS': {
            'isolation_level': 'read committed'
        }
    }
}

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'd^p_d88%^mu9acx-_96*-x4hekt7gv%uw*y02-!7280wg+i5wh'
