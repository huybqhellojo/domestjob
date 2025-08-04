'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TOTAL_STEPS = 4;

type FormData = {
  name: string;
  birthYear: string;
  gender: string;
  school: string;
  educationLevel: string;
  district: string;
  interests: string[];
  skills: string[];
  languageLevel: string;
  industry: string;
  jobType: string;
};

export function RegisterForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthYear: '',
    gender: '',
    school: '',
    educationLevel: '',
    district: '',
    interests: [],
    skills: [],
    languageLevel: '',
    industry: '',
    jobType: '',
  });

  const handleNext = () => setStep((prev) => (prev < TOTAL_STEPS ? prev + 1 : prev));
  const handleBack = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  const handleChange = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  
  const handleCheckboxChange = (field: 'interests' | 'skills', value: string) => {
    const currentValues = formData[field];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];
    handleChange(field, newValues);
  };

  const progressValue = (step / TOTAL_STEPS) * 100;

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <Progress value={progressValue} className="mb-4" />
        <CardTitle className="font-headline text-2xl">Bước {step}/{TOTAL_STEPS}</CardTitle>
        <CardDescription>
          {step === 1 && 'Thông tin cá nhân'}
          {step === 2 && 'Trình độ học vấn'}
          {step === 3 && 'Sở thích và kỹ năng nghề nghiệp'}
          {step === 4 && 'Xem lại và gửi hồ sơ'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Họ và tên</Label>
              <Input id="name" placeholder="Nguyễn Văn A" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="birthYear">Năm sinh</Label>
              <Input id="birthYear" type="number" placeholder="1999" value={formData.birthYear} onChange={(e) => handleChange('birthYear', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Giới tính</Label>
              <Select onValueChange={(value) => handleChange('gender', value)} value={formData.gender}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Chọn giới tính" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Nam">Nam</SelectItem>
                  <SelectItem value="Nữ">Nữ</SelectItem>
                  <SelectItem value="Khác">Khác</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="school">Trường học</Label>
              <Input id="school" placeholder="Đại học Bách Khoa" value={formData.school} onChange={(e) => handleChange('school', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="educationLevel">Trình độ</Label>
              <Select onValueChange={(value) => handleChange('educationLevel', value)} value={formData.educationLevel}>
                <SelectTrigger id="educationLevel">
                  <SelectValue placeholder="Chọn trình độ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="THPT">Tốt nghiệp THPT</SelectItem>
                  <SelectItem value="Trung cấp">Trung cấp</SelectItem>
                  <SelectItem value="Cao đẳng">Cao đẳng</SelectItem>
                  <SelectItem value="Đại học">Đại học</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="space-y-2 md:col-span-2">
              <Label htmlFor="district">Quận/Huyện đang ở</Label>
              <Input id="district" placeholder="Quận 1, TP.HCM" value={formData.district} onChange={(e) => handleChange('district', e.target.value)} />
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <Label className="font-bold">Lĩnh vực quan tâm</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                {['Cơ khí', 'Điện tử', 'Dệt may', 'Chế biến thực phẩm', 'IT', 'Logistics'].map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox id={`interest-${interest}`} onCheckedChange={() => handleCheckboxChange('interests', interest)} checked={formData.interests.includes(interest)}/>
                    <Label htmlFor={`interest-${interest}`}>{interest}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label className="font-bold">Kỹ năng</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                {['Vận hành máy', 'Lắp ráp', 'Kiểm tra chất lượng', 'Sửa chữa', 'Lập trình', 'Ngoại ngữ'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Checkbox id={`skill-${skill}`} onCheckedChange={() => handleCheckboxChange('skills', skill)} checked={formData.skills.includes(skill)} />
                    <Label htmlFor={`skill-${skill}`}>{skill}</Label>
                  </div>
                ))}
              </div>
            </div>
             <div className="space-y-2">
              <Label htmlFor="languageLevel">Trình độ ngoại ngữ (Tiếng Anh/Nhật/Hàn)</Label>
              <Select onValueChange={(value) => handleChange('languageLevel', value)} value={formData.languageLevel}>
                <SelectTrigger id="languageLevel">
                  <SelectValue placeholder="Chọn trình độ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cơ bản">Cơ bản</SelectItem>
                  <SelectItem value="Giao tiếp">Giao tiếp tốt</SelectItem>
                  <SelectItem value="Thành thạo">Thành thạo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="space-y-4">
            <h3 className="font-bold font-headline">Tổng hợp thông tin</h3>
            <p><strong>Họ tên:</strong> {formData.name}</p>
            <p><strong>Năm sinh:</strong> {formData.birthYear}</p>
            <p><strong>Giới tính:</strong> {formData.gender}</p>
            <p><strong>Trường:</strong> {formData.school}</p>
            <p><strong>Trình độ:</strong> {formData.educationLevel}</p>
            <p><strong>Lĩnh vực quan tâm:</strong> {formData.interests.join(', ')}</p>
            <p><strong>Kỹ năng:</strong> {formData.skills.join(', ')}</p>
            <p><strong>Ngoại ngữ:</strong> {formData.languageLevel}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 ? (
          <Button variant="outline" onClick={handleBack}>
            <ChevronLeft /> Quay lại
          </Button>
        ) : <div />}
        {step < TOTAL_STEPS ? (
          <Button onClick={handleNext} style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            Tiếp theo <ChevronRight />
          </Button>
        ) : (
          <Button variant="default" onClick={() => alert('Hồ sơ đã được gửi đi (chức năng giả lập).')}>
            Gửi hồ sơ
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
