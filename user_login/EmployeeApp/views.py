from django.shortcuts import render

from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from EmployeeApp.models import Answer, Employees, Question, SubCat, Link
from EmployeeApp.serializers import AnswerSerializer,EmployeeSerializer,QuestionSerializer,LinkSerializer,SubCatSerializer

from django.core.files.storage import default_storage



@csrf_exempt
def linkApi(request,id=0):
    if request.method=='GET':
        link = Link.objects.all()
        link_serializer = LinkSerializer(link, many=True)
        return JsonResponse(link_serializer.data, safe=False)

    elif request.method=='POST':
        link_data=JSONParser().parse(request)
        link_serializer = LinkSerializer(data=link_data)
        if link_serializer.is_valid():
            link_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        link_data = JSONParser().parse(request)
        link=Link.objects.get(LinkId=link_data['LinkId'])
        link_serializer=LinkSerializer(link,data=link_data)
        if link_serializer.is_valid():
            link_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        link=Link.objects.get(LinkId=id)
        link.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def answerApi(request,id=0):
    if request.method=='GET':
        answer = Answer.objects.all()
        answer_serializer = AnswerSerializer(answer, many=True)
        return JsonResponse(answer_serializer.data, safe=False)

    elif request.method=='POST':
        answer_data=JSONParser().parse(request)
        answer_serializer = AnswerSerializer(data=answer_data)
        if answer_serializer.is_valid():
            answer_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        answer_data = JSONParser().parse(request)
        answer=Answer.objects.get(AnswerId=answer_data['AnswerId'])
        answer_serializer=AnswerSerializer(answer,data=answer_data)
        if answer_serializer.is_valid():
            answer_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        answer=Answer.objects.get(AnswerId=id)
        answer.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
@csrf_exempt
def questionApi(request,id=0):
    if request.method=='GET':
        ques = Question.objects.all()
        questions_serializer = QuestionSerializer(ques, many=True)
        return JsonResponse(questions_serializer.data, safe=False)

    elif request.method=='POST':
        question_data=JSONParser().parse(request)
        question_serializer = QuestionSerializer(data=question_data)
        if question_serializer.is_valid():
            question_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        question_data = JSONParser().parse(request)
        question=Question.objects.get(QuestionId=question_data['QuestionId'])
        question_serializer=QuestionSerializer(question,data=question_data)
        if question_serializer.is_valid():
            question_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        question=Question.objects.get(QuestionId=id)
        question.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def employeeApi(request,id=0):
    if request.method=='GET':
        employees = Employees.objects.all()
        employees_serializer = EmployeeSerializer(employees, many=True)
        return JsonResponse(employees_serializer.data, safe=False)

    elif request.method=='POST':
        employee_data=JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        employee_data = JSONParser().parse(request)
        employee=Employees.objects.get(EmployeeId=employee_data['EmployeeId'])
        employee_serializer=EmployeeSerializer(employee,data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        employee=Employees.objects.get(EmployeeId=id)
        employee.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)


@csrf_exempt
def subCatApi(request,id=0):
    if request.method=='GET':
        sub = SubCat.objects.all()
        sub_serializer = SubCatSerializer(sub, many=True)
        return JsonResponse(sub_serializer.data, safe=False)

    elif request.method=='POST':
        sub_data=JSONParser().parse(request)
        sub_serializer = SubCatSerializer(data=sub_data)
        if sub_serializer.is_valid():
            sub_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        sub_data = JSONParser().parse(request)
        sub=SubCat.objects.get(SubCatId=sub_data['SubCatId'])
        sub_serializer=SubCatSerializer(sub,data=sub_data)
        if sub_serializer.is_valid():
            sub_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        sub=SubCat.objects.get(SubCatId=id)
        sub.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
