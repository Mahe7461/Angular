"""
WSGI config for user_login project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'user_login.settings')

application = get_wsgi_application()
import gc 
class GCMiddleware(object):
    def process_response(self, request, response):
        gc.collect()
        #gc.enable()
        #gc.disable()
        #gc.isenable()
        #gc.set_debug()
        #gc.get_stats()

        return response
