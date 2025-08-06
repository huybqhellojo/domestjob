
'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Building, Cake, Dna, Edit, GraduationCap, MapPin, Phone, School, User, Award, Languages, Star, FileDown, Video, Image as ImageIcon, PlusCircle, Trash2, RefreshCw, X } from 'lucide-react';
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from "@/components/ui/checkbox";
import type { CandidateProfile } from '@/ai/flows/create-profile-flow';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

const emptyCandidate: CandidateProfile & { avatarUrl?: string; videoUrl?: string; experienceImages?: any[] } = {
    name: 'Chưa có thông tin',
    headline: 'Vui lòng tạo hồ sơ bằng AI hoặc cập nhật thủ công',
    location: 'Chưa có thông tin',
    about: '',
    education: [],
    experience: [],
    personalInfo: {
      birthYear: new Date().getFullYear(),
      gender: 'N/A',
      phone: 'N/A',
      language: 'N/A'
    },
    interests: [],
    skills: [],
    certifications: [],
    desiredIndustry: 'N/A',
    avatarUrl: 'https://placehold.co/128x128.png',
    videoUrl: '',
    experienceImages: [],
};


const commonSkills = ['Vận hành máy CNC', 'AutoCAD', 'Kiểm tra chất lượng', 'Làm việc nhóm', 'Giải quyết vấn đề', 'Tiếng Anh giao tiếp'];
const commonInterests = ['Cơ khí', 'Điện tử', 'IT', 'Logistics', 'Dệt may', 'Chế biến thực phẩm'];

const EditDialog = ({ children, title, onSave, content, description }: { children: React.ReactNode, title: string, onSave: () => void, content: React.ReactNode, description?: string }) => (
    <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
                <DialogTitle className="font-headline text-2xl">{title}</DialogTitle>
                <DialogDescription>
                    {description || 'Cập nhật thông tin của bạn và nhấn lưu để hoàn tất.'}
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto pr-4">
                {content}
            </div>
            <DialogFooter>
                <Button type="submit" onClick={onSave} className="bg-primary text-white">Lưu thay đổi</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
);


export default function CandidateProfilePage() {
  const [candidate, setCandidate] = useState<typeof emptyCandidate | null>(null);
  const [tempCandidate, setTempCandidate] = useState<typeof emptyCandidate | null>(null);
  const [newSkill, setNewSkill] = useState('');
  const [newInterest, setNewInterest] = useState('');

  useEffect(() => {
    const storedProfile = localStorage.getItem('generatedCandidateProfile');
    let profileToLoad: typeof emptyCandidate;

    if (storedProfile) {
      try {
        const parsedProfile: CandidateProfile = JSON.parse(storedProfile);
        profileToLoad = {
          ...emptyCandidate, // Start with empty to ensure all fields are present
          ...parsedProfile,
          // Add default visual elements if they don't exist in the parsed profile
          avatarUrl: 'https://placehold.co/128x128.png',
          videoUrl: '', // Assuming no video URL from AI
          experienceImages: [
              { src: 'https://placehold.co/600x400.png', alt: 'Làm việc với máy CNC', dataAiHint: 'CNC machine operation' },
              { src: 'https://placehold.co/600x400.png', alt: 'Kiểm tra sản phẩm', dataAiHint: 'product inspection' },
              { src: 'https://placehold.co/600x400.png', alt: 'Môi trường làm việc', dataAiHint: 'work environment' },
          ],
        };
        // IMPORTANT: Clear the storage only AFTER successfully parsing and preparing the data
        localStorage.removeItem('generatedCandidateProfile');
      } catch (error) {
        console.error("Failed to parse candidate profile from localStorage", error);
        profileToLoad = { ...emptyCandidate };
      }
    } else {
        // Fallback to an empty profile if nothing is in storage
        profileToLoad = { ...emptyCandidate };
    }
    setCandidate(profileToLoad);
    setTempCandidate(JSON.parse(JSON.stringify(profileToLoad)));
  }, []);

  if (!candidate || !tempCandidate) {
      return (
        <div className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="max-w-5xl mx-auto">
                    <Card className="shadow-2xl overflow-hidden">
                        <CardHeader className="p-0">
                            <Skeleton className="h-32 bg-gray-300" />
                            <div className="p-6 flex flex-col md:flex-row items-center md:items-end -mt-16">
                                <Skeleton className="h-32 w-32 rounded-full border-4 border-background bg-gray-400" />
                                <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left space-y-2">
                                    <Skeleton className="h-8 w-64" />
                                    <Skeleton className="h-6 w-80" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <Skeleton className="h-96 w-full" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      );
  }

  const handleSave = () => {
    setCandidate(JSON.parse(JSON.stringify(tempCandidate)));
  };

  const handleChange = (section: keyof typeof tempCandidate, index: number, field: string, value: any) => {
      setTempCandidate(prev => {
          if (!prev) return null;
          const newCandidate = { ...prev };
          // @ts-ignore
          newCandidate[section][index][field] = value;
          return newCandidate;
      });
  };

  const handleAddItem = (section: 'experience' | 'education' | 'certifications') => {
      setTempCandidate(prev => {
          if (!prev) return null;
          const newCandidate = { ...prev };
          if (section === 'experience') {
              newCandidate.experience.push({ company: '', role: '', period: '', description: '' });
          } else if (section === 'education') {
              newCandidate.education.push({ school: '', degree: '', gradYear: new Date().getFullYear() });
          } else if (section === 'certifications') {
              newCandidate.certifications.push('');
          }
          return newCandidate;
      });
  };

  const handleRemoveItem = (section: 'experience' | 'education' | 'certifications' | 'skills' | 'interests', indexOrValue: number | string) => {
      setTempCandidate(prev => {
          if (!prev) return null;
          const newCandidate = { ...prev };
          if (section === 'skills' || section === 'interests') {
              // @ts-ignore
              newCandidate[section] = newCandidate[section].filter(item => item !== indexOrValue);
          } else {
            // @ts-ignore
            newCandidate[section].splice(indexOrValue, 1);
          }
          return newCandidate;
      });
  };
  
  const handleCertificationChange = (index: number, value: string) => {
      setTempCandidate(prev => {
          if (!prev) return null;
          const newCandidate = { ...prev };
          newCandidate.certifications[index] = value;
          return newCandidate;
      });
  };
  
  const handleCheckboxChange = (field: 'skills' | 'interests', value: string) => {
    setTempCandidate(prev => {
        if (!prev) return null;
        const newCandidate = { ...prev };
        const currentValues = newCandidate[field];
        const newValues = currentValues.includes(value)
          ? currentValues.filter((item: string) => item !== value)
          : [...currentValues, value];
        // @ts-ignore
        newCandidate[field] = newValues;
        return newCandidate;
    });
  };

  const handleAddNewChip = (field: 'skills' | 'interests') => {
      if (!tempCandidate) return;
      const valueToAdd = field === 'skills' ? newSkill.trim() : newInterest.trim();
      if (valueToAdd && !tempCandidate[field].includes(valueToAdd)) {
          setTempCandidate(prev => ({
              ...prev!,
              // @ts-ignore
              [field]: [...prev![field], valueToAdd]
          }));
          if (field === 'skills') {
              setNewSkill('');
          } else {
              setNewInterest('');
          }
      }
  };


  const aboutEditDialogContent = (
      <Textarea value={tempCandidate.about} onChange={(e) => setTempCandidate({...tempCandidate, about: e.target.value})} rows={6} />
  );
  
  const videoEditDialogContent = (
      <div className="space-y-2">
          <Label htmlFor="video-url-edit">Link YouTube Video</Label>
          <Input id="video-url-edit" value={tempCandidate.videoUrl} onChange={(e) => setTempCandidate({...tempCandidate, videoUrl: e.target.value})} />
      </div>
  );
  
  const experienceEditDialogContent = (
      <div className="space-y-6">
          {tempCandidate.experience.map((exp, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-2 relative">
                  <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold">Kinh nghiệm #{index + 1}</h4>
                      <Button variant="ghost" size="icon" onClick={() => handleRemoveItem('experience', index)}>
                          <Trash2 className="h-4 w-4 text-destructive"/>
                      </Button>
                  </div>
                  <Label>Vai trò</Label>
                  <Input value={exp.role} onChange={e => handleChange('experience', index, 'role', e.target.value)} />
                  <Label>Công ty</Label>
                  <Input value={exp.company} onChange={e => handleChange('experience', index, 'company', e.target.value)} />
                  <Label>Thời gian</Label>
                  <Input value={exp.period} onChange={e => handleChange('experience', index, 'period', e.target.value)} />
                  <Label>Mô tả</Label>
                  <Textarea value={exp.description} onChange={e => handleChange('experience', index, 'description', e.target.value)} />
              </div>
          ))}
          <Button variant="outline" className="w-full" onClick={() => handleAddItem('experience')}>
              <PlusCircle className="mr-2"/> Thêm kinh nghiệm
          </Button>
      </div>
  );
  
  const educationEditDialogContent = (
      <div className="space-y-6">
          {tempCandidate.education.map((edu, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-2 relative">
                  <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold">Học vấn #{index + 1}</h4>
                      <Button variant="ghost" size="icon" onClick={() => handleRemoveItem('education', index)}>
                          <Trash2 className="h-4 w-4 text-destructive"/>
                      </Button>
                  </div>
                  <Label>Trường</Label>
                  <Input value={edu.school} onChange={e => handleChange('education', index, 'school', e.target.value)} />
                  <Label>Chuyên ngành</Label>
                  <Input value={edu.degree} onChange={e => handleChange('education', index, 'degree', e.target.value)} />
                  <Label>Năm tốt nghiệp</Label>
                  <Input type="number" value={edu.gradYear} onChange={e => handleChange('education', index, 'gradYear', parseInt(e.target.value))} />
              </div>
          ))}
          <Button variant="outline" className="w-full" onClick={() => handleAddItem('education')}>
              <PlusCircle className="mr-2"/> Thêm học vấn
          </Button>
      </div>
  );
  
  const skillsInterestsEditDialogContent = (
      <div className="space-y-6">
          <div className="space-y-2">
              <Label className="font-bold">Kỹ năng</Label>
              <div className="flex flex-wrap gap-2 mb-4">
                  {tempCandidate.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="pr-1">
                          {skill}
                          <button onClick={() => handleRemoveItem('skills', skill)} className="ml-2 rounded-full hover:bg-destructive/80 p-0.5">
                              <X className="h-3 w-3" />
                          </button>
                      </Badge>
                  ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {commonSkills.filter(s => !tempCandidate.skills.includes(s)).map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox id={`skill-${skill}`} onCheckedChange={() => handleCheckboxChange('skills', skill)} checked={tempCandidate.skills.includes(skill)}/>
                      <Label htmlFor={`skill-${skill}`} className="text-sm font-normal cursor-pointer">{skill}</Label>
                    </div>
                  ))}
              </div>
              <div className="flex gap-2 mt-2">
                  <Input value={newSkill} onChange={e => setNewSkill(e.target.value)} placeholder="Thêm kỹ năng khác..." />
                  <Button onClick={() => handleAddNewChip('skills')}>Thêm</Button>
              </div>
          </div>
           <div className="space-y-2">
              <Label className="font-bold">Lĩnh vực quan tâm</Label>
              <div className="flex flex-wrap gap-2 mb-4">
                  {tempCandidate.interests.map((interest) => (
                      <Badge key={interest} className="bg-accent-blue text-white pr-1">
                          {interest}
                          <button onClick={() => handleRemoveItem('interests', interest)} className="ml-2 rounded-full hover:bg-destructive/80 p-0.5">
                              <X className="h-3 w-3" />
                          </button>
                      </Badge>
                  ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {commonInterests.filter(i => !tempCandidate.interests.includes(i)).map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox id={`interest-${interest}`} onCheckedChange={() => handleCheckboxChange('interests', interest)} checked={tempCandidate.interests.includes(interest)}/>
                      <Label htmlFor={`interest-${interest}`} className="text-sm font-normal cursor-pointer">{interest}</Label>
                    </div>
                  ))}
              </div>
              <div className="flex gap-2 mt-2">
                  <Input value={newInterest} onChange={e => setNewInterest(e.target.value)} placeholder="Thêm lĩnh vực khác..." />
                  <Button onClick={() => handleAddNewChip('interests')}>Thêm</Button>
              </div>
          </div>
      </div>
  );
  
  const certificationsEditDialogContent = (
       <div className="space-y-6">
          {tempCandidate.certifications.map((cert, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-2 relative">
                   <div className="flex justify-between items-center mb-2">
                      <Label htmlFor={`cert-${index}`}>Chứng chỉ #{index + 1}</Label>
                      <Button variant="ghost" size="icon" onClick={() => handleRemoveItem('certifications', index)}>
                          <Trash2 className="h-4 w-4 text-destructive"/>
                      </Button>
                  </div>
                  <Input id={`cert-${index}`} value={cert} onChange={(e) => handleCertificationChange(index, e.target.value)} />
              </div>
          ))}
          <Button variant="outline" className="w-full" onClick={() => handleAddItem('certifications')}>
              <PlusCircle className="mr-2"/> Thêm chứng chỉ
          </Button>
       </div>
  );

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-2xl overflow-hidden">
             <CardHeader className="p-0">
               <div className="bg-gradient-to-tr from-primary to-accent h-32" />
                 <div className="p-6 flex flex-col md:flex-row items-center md:items-end -mt-16">
                 <Avatar className="h-32 w-32 border-4 border-background bg-background shadow-lg">
                  <AvatarImage src={candidate.avatarUrl} alt={candidate.name} data-ai-hint="professional headshot" />
                  <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                  <h1 className="text-3xl font-headline font-bold">{candidate.name}</h1>
                  <p className="text-muted-foreground">{candidate.headline}</p>
                  <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-2 mt-1">
                    <MapPin className="h-4 w-4" /> {candidate.location}
                  </p>
                </div>
                 <EditDialog
                    title="Chỉnh sửa thông tin cơ bản"
                    onSave={handleSave}
                    content={
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name-edit">Họ và tên</Label>
                                <Input id="name-edit" value={tempCandidate.name} onChange={(e) => setTempCandidate({...tempCandidate, name: e.target.value})} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="headline-edit">Tiêu đề hồ sơ</Label>
                                <Input id="headline-edit" value={tempCandidate.headline} onChange={(e) => setTempCandidate({...tempCandidate, headline: e.target.value})} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="location-edit">Địa điểm</Label>
                                <Input id="location-edit" value={tempCandidate.location} onChange={(e) => setTempCandidate({...tempCandidate, location: e.target.value})} />
                            </div>
                        </div>
                    }
                >
                  <Button className="md:ml-auto mt-4 md:mt-0" variant="outline"><Edit /> Sửa hồ sơ</Button>
                 </EditDialog>
              </div>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-headline text-xl flex items-center"><User className="mr-3 text-primary"/> Giới thiệu bản thân</CardTitle>
                     <EditDialog
                        title="Chỉnh sửa Giới thiệu bản thân"
                        onSave={handleSave}
                        content={aboutEditDialogContent}
                    >
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                    </EditDialog>
                  </CardHeader>
                  <CardContent>
                    {candidate.about ? (
                      <p className="text-muted-foreground whitespace-pre-line">{candidate.about}</p>
                    ) : (
                      <div className="text-muted-foreground">
                        <span>Chưa có thông tin. </span>
                        <EditDialog title="Chỉnh sửa Giới thiệu bản thân" onSave={handleSave} content={aboutEditDialogContent}>
                            <button className="text-primary hover:underline">Nhấn vào đây để cập nhật</button>
                        </EditDialog>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="font-headline text-xl flex items-center"><Video className="mr-3 text-primary"/> Video giới thiệu</CardTitle>
                        <EditDialog
                            title="Chỉnh sửa Video giới thiệu"
                            onSave={handleSave}
                            content={videoEditDialogContent}
                        >
                            <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                        </EditDialog>
                    </CardHeader>
                    <CardContent>
                        {candidate.videoUrl ? (
                            <div className="aspect-video rounded-lg overflow-hidden">
                                <iframe className="w-full h-full" src={candidate.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        ) : (
                            <div className="text-muted-foreground">
                                <span>Chưa có video giới thiệu. </span>
                                <EditDialog title="Chỉnh sửa Video giới thiệu" onSave={handleSave} content={videoEditDialogContent}>
                                    <button className="text-primary hover:underline">Nhấn vào đây để cập nhật</button>
                                </EditDialog>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-headline text-xl flex items-center"><Briefcase className="mr-3 text-primary"/> Kinh nghiệm làm việc</CardTitle>
                     <EditDialog
                        title="Chỉnh sửa Kinh nghiệm làm việc"
                        onSave={handleSave}
                        content={experienceEditDialogContent}
                    >
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                     </EditDialog>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {candidate.experience.length > 0 ? candidate.experience.map((exp, index) => (
                        <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary">
                            <h4 className="font-bold">{exp.role}</h4>
                            <p className="font-semibold text-sm text-primary">{exp.company}</p>
                            <p className="text-xs text-muted-foreground mb-1">{exp.period}</p>
                            <p className="text-sm text-muted-foreground">{exp.description}</p>
                        </div>
                    )) : (
                        <div className="text-muted-foreground">
                           <span>Chưa có thông tin. </span>
                            <EditDialog title="Chỉnh sửa Kinh nghiệm làm việc" onSave={handleSave} content={experienceEditDialogContent}>
                               <button className="text-primary hover:underline">Nhấn vào đây để cập nhật</button>
                            </EditDialog>
                        </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="font-headline text-xl flex items-center"><ImageIcon className="mr-3 text-primary"/> Hình ảnh</CardTitle>
                        <Button variant="ghost" size="icon"><PlusCircle className="h-4 w-4"/></Button>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {candidate.experienceImages && candidate.experienceImages.length > 0 ? candidate.experienceImages.map((img, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg">
                                <Image src={img.src} alt={img.alt} width={400} height={300} className="rounded-lg object-cover aspect-video" data-ai-hint={img.dataAiHint} />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
                                        <RefreshCw className="h-5 w-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/20 hover:text-destructive">
                                        <Trash2 className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        )) : <p className="text-muted-foreground col-span-full">Chưa có hình ảnh.</p>}
                    </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-headline text-xl flex items-center"><GraduationCap className="mr-3 text-primary"/> Học vấn</CardTitle>
                     <EditDialog
                        title="Chỉnh sửa Học vấn"
                        onSave={handleSave}
                        content={educationEditDialogContent}
                    >
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                    </EditDialog>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     {candidate.education.length > 0 ? candidate.education.map((edu, index) => (
                        <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary">
                            <p className="font-semibold flex items-center gap-2"><School className="h-4 w-4"/> {edu.school}</p>
                            <p className="text-muted-foreground ml-6">Chuyên ngành: {edu.degree}</p>
                            <p className="text-muted-foreground ml-6">Tốt nghiệp năm: {edu.gradYear}</p>
                        </div>
                     )) : (
                        <div className="text-muted-foreground">
                            <span>Chưa có thông tin. </span>
                            <EditDialog title="Chỉnh sửa Học vấn" onSave={handleSave} content={educationEditDialogContent}>
                                <button className="text-primary hover:underline">Nhấn vào đây để cập nhật</button>
                            </EditDialog>
                        </div>
                     )}
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-1 space-y-6">
                 <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-headline text-xl flex items-center"><User className="mr-3 text-primary"/> Thông tin cá nhân</CardTitle>
                    <EditDialog
                        title="Chỉnh sửa Thông tin cá nhân"
                        onSave={handleSave}
                        content={
                            <div className="space-y-4">
                                <Label>Năm sinh</Label>
                                <Input type="number" value={tempCandidate.personalInfo.birthYear} onChange={e => setTempCandidate({...tempCandidate, personalInfo: {...tempCandidate.personalInfo, birthYear: parseInt(e.target.value)} })} />
                                <Label>Giới tính</Label>
                                <Input value={tempCandidate.personalInfo.gender} onChange={e => setTempCandidate({...tempCandidate, personalInfo: {...tempCandidate.personalInfo, gender: e.target.value} })} />
                                <Label>Số điện thoại</Label>
                                <Input value={tempCandidate.personalInfo.phone} onChange={e => setTempCandidate({...tempCandidate, personalInfo: {...tempCandidate.personalInfo, phone: e.target.value} })} />
                                <Label>Ngoại ngữ</Label>
                                <Input value={tempCandidate.personalInfo.language} onChange={e => setTempCandidate({...tempCandidate, personalInfo: {...tempCandidate.personalInfo, language: e.target.value} })} />
                            </div>
                        }
                    >
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                    </EditDialog>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="flex items-start gap-3"><Cake className="h-4 w-4 mt-1 text-muted-foreground"/> <span><strong>Năm sinh:</strong> {candidate.personalInfo.birthYear}</span></p>
                    <p className="flex items-start gap-3"><Dna className="h-4 w-4 mt-1 text-muted-foreground"/> <span><strong>Giới tính:</strong> {candidate.personalInfo.gender}</span></p>
                    <p className="flex items-start gap-3"><Phone className="h-4 w-4 mt-1 text-muted-foreground"/> <span><strong>SĐT:</strong> {candidate.personalInfo.phone}</span></p>
                    <p className="flex items-start gap-3"><Languages className="h-4 w-4 mt-1 text-muted-foreground"/> <span><strong>Ngoại ngữ:</strong> {candidate.personalInfo.language}</span></p>
                    <p className="flex items-start gap-3"><Building className="h-4 w-4 mt-1 text-muted-foreground"/> <span><strong>Ngành mong muốn:</strong> {candidate.desiredIndustry}</span></p>
                  </CardContent>
                </Card>

                 <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-headline text-xl flex items-center"><Star className="mr-3 text-primary"/> Kỹ năng & Lĩnh vực</CardTitle>
                    <EditDialog
                        title="Chỉnh sửa Kỹ năng & Lĩnh vực"
                        description="Chọn các mục có sẵn hoặc thêm mới để làm nổi bật hồ sơ của bạn."
                        onSave={handleSave}
                        content={skillsInterestsEditDialogContent}
                    >
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                    </EditDialog>
                  </CardHeader>
                  <CardContent>
                     <h4 className="font-semibold mb-2 text-sm">Kỹ năng</h4>
                     <div className="flex flex-wrap gap-2 mb-4">
                        {candidate.skills.length > 0 ? candidate.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>) : 
                        <div className="text-muted-foreground text-sm">
                            <span>Chưa có kỹ năng. </span>
                            <EditDialog title="Chỉnh sửa Kỹ năng & Lĩnh vực" description="Chọn các mục có sẵn hoặc thêm mới để làm nổi bật hồ sơ của bạn." onSave={handleSave} content={skillsInterestsEditDialogContent}>
                               <button className="text-primary hover:underline">Nhấn vào đây để cập nhật</button>
                            </EditDialog>
                        </div>}
                     </div>
                     <h4 className="font-semibold mb-2 text-sm">Lĩnh vực quan tâm</h4>
                     <div className="flex flex-wrap gap-2">
                        {candidate.interests.length > 0 ? candidate.interests.map(interest => <Badge key={interest} className="bg-accent-blue text-white">{interest}</Badge>) : 
                        <div className="text-muted-foreground text-sm">
                            <span>Chưa có lĩnh vực quan tâm. </span>
                            <EditDialog title="Chỉnh sửa Kỹ năng & Lĩnh vực" description="Chọn các mục có sẵn hoặc thêm mới để làm nổi bật hồ sơ của bạn." onSave={handleSave} content={skillsInterestsEditDialogContent}>
                                <button className="text-primary hover:underline">Nhấn vào đây để cập nhật</button>
                            </EditDialog>
                        </div>}
                     </div>
                  </CardContent>
                </Card>

                 <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-headline text-xl flex items-center"><Award className="mr-3 text-primary"/> Chứng chỉ & Giải thưởng</CardTitle>
                     <EditDialog
                        title="Chỉnh sửa Chứng chỉ & Giải thưởng"
                        onSave={handleSave}
                        content={certificationsEditDialogContent}
                    >
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                    </EditDialog>
                  </CardHeader>
                  <CardContent className="space-y-2">
                     {candidate.certifications.length > 0 ? candidate.certifications.map((cert, index) => (
                         <p key={index} className="text-sm flex items-center gap-2"><Award className="h-4 w-4 text-muted-foreground"/>{cert}</p>
                     )) : 
                     <div className="text-muted-foreground text-sm">
                        <span>Chưa có chứng chỉ. </span>
                        <EditDialog title="Chỉnh sửa Chứng chỉ & Giải thưởng" onSave={handleSave} content={certificationsEditDialogContent}>
                            <button className="text-primary hover:underline">Nhấn vào đây để cập nhật</button>
                        </EditDialog>
                    </div>}
                  </CardContent>
                </Card>

                 <Button className="w-full bg-accent-green hover:bg-accent-green/90 text-white"><FileDown/> Tải CV (.pdf)</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
