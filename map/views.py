from django.shortcuts import render

# Create your views here.

def map_view(request):
    return render(request,'map/map_page.html')



from django.http import JsonResponse
from .models import SentinelStore
from django.core.serializers.json import DjangoJSONEncoder
from django.core.serializers import serialize
from django.http import HttpResponse
import json

def json_view(request):
	
	queryset = SentinelStore.objects.order_by('date')
	qs_serialized = serialize('json', queryset)
	qs_serialized_formatted = json.dumps(json.loads(qs_serialized), indent=4)
	# for entry in queryset:
	# 	print entry.date
	# 	print type(entry.date)


	# # class Model(model.Model):
	# # 	def as_dict(self):
	# # 		return {
	# # 			"id": self.id,
	# # 			"foldername":self.foldername,
	# # 			"filename":self.filename,
	# # 		}
	# # print queryset.self.foldername*100

	# class LazyEncoder(DjangoJSONEncoder):
 #    def default(self, obj):
 #        if isinstance(obj, YourCustomType):
 #            return str(obj)
 #        return super().default(obj)


	# return serialize('json', SentinelStore.objects.all(), cls=LazyEncoder)
	return HttpResponse(qs_serialized_formatted,content_type="application/json")



