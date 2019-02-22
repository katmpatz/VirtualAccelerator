DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'vap',
        'USER': 'vap_user',
        'PASSWORD': 'V@p2018V@p2018',
        'HOST': '127.0.0.1',
        'OPTIONS': {
            'isolation_level': 'read committed'
        }
    }
}

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'd^p_d88%^mu9acx-_96*-x4hekt7gv%uw*y02-!7280wg+i5wh'

ALLOWED_HOSTS = ['localhost', '127.0.0.1', '[::1]', 'snf-843482.vm.okeanos.grnet.gr']

# password in ocean is V@p2018V@p2018
