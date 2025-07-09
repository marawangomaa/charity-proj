import { inject, Injectable } from '@angular/core';
import { IAdvisor } from '../Interfaces/advisor'; // Assuming you have a model for Advisor
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class Advisor {
  
  
  _httpClient = inject(HttpClient);
  protected readonly _environment = environment;
  
  _baseUrl = this._environment.apiUrl;

  getAllAdvisors(): Observable<IAdvisor[]> {
    return this._httpClient.get<IAdvisor[]>(`${this._baseUrl}/api/Advisor/with-availability`);
  }



//     Consultants:IAdvisor[] = [
//   {
//     id: 1,
//     name: 'د. أحمد السعدي',
//     description: 'خبير في تصميم وتنفيذ البرامج المجتمعية المستدامة، مع خبرة تتجاوز 15 عامًا في العمل الخيري.',
//     status: 'متاح هذا الأسبوع'
//   },
//   {
//     id: 2,
//     name: 'م. سارة عبدالعزيز',
//     description: 'متخصصة في إدارة المشاريع التنموية وتطوير الأداء المؤسسي باستخدام منهجيات حديثة.',
//     status: 'غير متاح'
//   },
//   {
//     id: 3,
//     name: 'أ. خالد العتيبي',
//     description: 'مستشار في تطوير مبادرات التمكين الاقتصادي وتمويل المشاريع الصغيرة للأسر المنتجة.',
//     status: 'متاح هذا الأسبوع'
//   },
//   {
//     id: 4,
//     name: 'د. ليلى الشمري',
//     description: 'خبيرة في تصميم المناهج غير الرسمية وبرامج التعليم المجتمعي للفئات المهمشة.',
//     status: 'غير متاح'
//   },
//   {
//     id: 5,
//     name: 'أ. يوسف الحربي',
//     description: 'مدرب ومستشار في بناء القدرات القيادية ووضع الخطط الاستراتيجية للمنظمات غير الربحية.',
//     status: 'متاح هذا الأسبوع'
//   },
//   {
//     id: 6,
//     name: 'م. ريم الزهراني',
//     description: 'متخصصة في التحول الرقمي للمنظمات الخيرية وتطوير الحلول التقنية لخدمة المستفيدين.',
//     status: 'متاح هذا الأسبوع'
//   },
//   {
//     id: 7,
//     name: 'د. ناصر القحطاني',
//     description: 'مستشار في تطوير أنظمة الحوكمة وتعزيز الشفافية والمساءلة في العمل المؤسسي.',
//     status: 'غير متاح'
//   },
//   {
//     id: 8,
//     name: 'أ. منى العبدالله',
//     description: 'خبيرة في تصميم استراتيجيات التطوع وبناء فرق العمل التطوعية الفعالة.',
//     status: 'متاح هذا الأسبوع'
//   }
// ];

  constructor() { }
}
