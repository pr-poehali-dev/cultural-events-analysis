import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Area, AreaChart, Bar, BarChart, Line, LineChart, Pie, PieChart, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const visitorsData = [
    { month: 'Янв', visitors: 4500, events: 12 },
    { month: 'Фев', visitors: 5200, events: 15 },
    { month: 'Мар', visitors: 6800, events: 18 },
    { month: 'Апр', visitors: 7200, events: 22 },
    { month: 'Май', visitors: 8500, events: 25 },
    { month: 'Июн', visitors: 9200, events: 28 },
  ];

  const eventTypesData = [
    { name: 'Театр', value: 35, color: '#0EA5E9' },
    { name: 'Музей', value: 25, color: '#8B5CF6' },
    { name: 'Концерт', value: 20, color: '#EC4899' },
    { name: 'Выставка', value: 15, color: '#10B981' },
    { name: 'Другое', value: 5, color: '#F59E0B' },
  ];

  const revenueData = [
    { month: 'Янв', revenue: 125000 },
    { month: 'Фев', revenue: 142000 },
    { month: 'Мар', revenue: 168000 },
    { month: 'Апр', revenue: 195000 },
    { month: 'Май', revenue: 220000 },
    { month: 'Июн', revenue: 248000 },
  ];

  const topEventsData = [
    { name: 'Большой театр', rating: 4.9, visitors: 1250 },
    { name: 'Третьяковская', rating: 4.8, visitors: 980 },
    { name: 'Эрмитаж', rating: 4.9, visitors: 1450 },
    { name: 'Мариинка', rating: 4.7, visitors: 890 },
    { name: 'ГМИИ', rating: 4.6, visitors: 760 },
  ];

  const satisfactionData = [
    { category: 'Качество', value: 92 },
    { category: 'Сервис', value: 88 },
    { category: 'Доступность', value: 85 },
    { category: 'Цена', value: 78 },
  ];

  const renderHome = () => (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Культурная Аналитика
        </h1>
        <p className="text-muted-foreground text-lg">
          Платформа анализа данных о мероприятиях в сфере культуры
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Всего мероприятий</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,284</div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <Icon name="TrendingUp" size={14} />
              +12% за месяц
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Посетителей</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">42,450</div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <Icon name="TrendingUp" size={14} />
              +8.5% за месяц
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Доход</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₽1.1M</div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <Icon name="TrendingUp" size={14} />
              +15.3% за месяц
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Рейтинг</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground mt-1">из 5.0</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Посещаемость</CardTitle>
            <CardDescription>Количество посетителей по месяцам</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={visitorsData}>
                <defs>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Area type="monotone" dataKey="visitors" stroke="#0EA5E9" fillOpacity={1} fill="url(#colorVisitors)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Типы мероприятий</CardTitle>
            <CardDescription>Распределение по категориям</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={eventTypesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {eventTypesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderDashboards = () => (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-6">Дашборды</h2>
      <Tabs defaultValue="dashboard1" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="dashboard1">Посещаемость</TabsTrigger>
          <TabsTrigger value="dashboard2">Мероприятия</TabsTrigger>
          <TabsTrigger value="dashboard3">Выручка</TabsTrigger>
          <TabsTrigger value="dashboard4">Рейтинг</TabsTrigger>
          <TabsTrigger value="dashboard5">География</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard1" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Сегодня</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary">1,248</div>
                <p className="text-sm text-muted-foreground mt-2">посетителей</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Эта неделя</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-secondary">8,941</div>
                <p className="text-sm text-muted-foreground mt-2">посетителей</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Этот месяц</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-accent">42,450</div>
                <p className="text-sm text-muted-foreground mt-2">посетителей</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Динамика посещений</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={visitorsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="visitors" stroke="#0EA5E9" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dashboard2" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Количество мероприятий</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={visitorsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Bar dataKey="events" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Топ мероприятий</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topEventsData.map((event, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                    <div>
                      <p className="font-semibold">{event.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Icon name="Star" size={14} className="text-yellow-500" />
                        <span className="text-sm text-muted-foreground">{event.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{event.visitors}</p>
                      <p className="text-xs text-muted-foreground">посетителей</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dashboard3" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Динамика выручки</CardTitle>
              <CardDescription>Рост дохода по месяцам</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip formatter={(value: number) => `₽${value.toLocaleString()}`} />
                  <Area type="monotone" dataKey="revenue" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dashboard4" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Удовлетворенность посетителей</CardTitle>
              <CardDescription>Оценки по категориям</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={satisfactionData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" domain={[0, 100]} stroke="#6b7280" />
                  <YAxis dataKey="category" type="category" stroke="#6b7280" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#10B981" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dashboard5" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>География посещений</CardTitle>
              <CardDescription>Распределение по регионам</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { city: 'Москва', percent: 45, visitors: 19102 },
                  { city: 'Санкт-Петербург', percent: 28, visitors: 11886 },
                  { city: 'Казань', percent: 12, visitors: 5094 },
                  { city: 'Екатеринбург', percent: 8, visitors: 3396 },
                  { city: 'Другие', percent: 7, visitors: 2972 },
                ].map((region, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{region.city}</span>
                      <span className="text-muted-foreground">{region.visitors.toLocaleString()} ({region.percent}%)</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                        style={{ width: `${region.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderAnalytics = () => (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-6">Аналитика</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Сравнение периодов</CardTitle>
            <CardDescription>Этот месяц vs прошлый месяц</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <span className="font-medium">Посещаемость</span>
                <span className="text-green-600 font-semibold">+12.5%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <span className="font-medium">Выручка</span>
                <span className="text-green-600 font-semibold">+18.3%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <span className="font-medium">Новых мероприятий</span>
                <span className="text-green-600 font-semibold">+8.1%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <span className="font-medium">Рейтинг</span>
                <span className="text-green-600 font-semibold">+2.1%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Прогноз на следующий месяц</CardTitle>
            <CardDescription>На основе трендов</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground mb-1">Ожидаемая посещаемость</p>
                <p className="text-2xl font-bold text-primary">47,200</p>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <p className="text-sm text-muted-foreground mb-1">Ожидаемая выручка</p>
                <p className="text-2xl font-bold text-secondary">₽1.28M</p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-muted-foreground mb-1">Планируется мероприятий</p>
                <p className="text-2xl font-bold text-accent">32</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-6">Отчеты</h2>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Доступные отчеты</CardTitle>
            <CardDescription>Загрузите детальные отчеты в различных форматах</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Ежемесячный отчет', icon: 'FileText', desc: 'Полная статистика за месяц' },
                { title: 'Финансовый отчет', icon: 'DollarSign', desc: 'Детализация выручки и расходов' },
                { title: 'Отчет по мероприятиям', icon: 'Calendar', desc: 'Анализ всех мероприятий' },
                { title: 'Отчет по посетителям', icon: 'Users', desc: 'Демография и поведение' },
              ].map((report, idx) => (
                <div key={idx} className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name={report.icon as any} size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{report.title}</h3>
                      <p className="text-sm text-muted-foreground">{report.desc}</p>
                      <Button variant="link" className="p-0 h-auto mt-2">
                        Скачать отчет
                        <Icon name="Download" size={14} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                <Icon name="BarChart3" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">CultureAnalytics</span>
            </div>
            <div className="flex gap-2">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'dashboards', label: 'Дашборды', icon: 'LayoutDashboard' },
                { id: 'analytics', label: 'Аналитика', icon: 'TrendingUp' },
                { id: 'reports', label: 'Отчеты', icon: 'FileText' },
              ].map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(section.id)}
                  className="gap-2"
                >
                  <Icon name={section.icon as any} size={16} />
                  <span className="hidden sm:inline">{section.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        {activeSection === 'home' && renderHome()}
        {activeSection === 'dashboards' && renderDashboards()}
        {activeSection === 'analytics' && renderAnalytics()}
        {activeSection === 'reports' && renderReports()}
      </main>
    </div>
  );
};

export default Index;
