function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Основной контейнер */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Блок с картинкой */}
        <div className="text-center mb-16">
          <img 
            src="/реклама-кот.png" 
            alt="Тренер Чтения" 
            className="max-w-md mx-auto rounded-lg shadow-sm"
          />
        </div>

        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4">
            Тренер Чтения
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Поможем вашему ребенку говорить яснее!
          </p>
        </div>

        {/* Основной текстовый блок */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-800 mb-4">
              Замечаете, что ребенка сложно понять? Переживаете, как он будет читать вслух в школе?
            </p>
            <p>
              Нарушения произношения могут стать настоящим препятствием для уверенности ребенка и его успехов в учебе. 
              Чтение вслух превращается в стресс, а окружающие не всегда понимают речь. Как отследить прогресс и помочь малышу?
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl font-medium text-blue-600 mb-8">
              Представляем "Тренер Чтения" – умное приложение, которое станет вашим надежным помощником и личным логопедическим ассистентом!
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Как это работает? Просто, увлекательно, эффективно:</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-200 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">1. Читайте Любимые Истории</h3>
                <p>Ребенок читает вслух любой текст – сказку, статью из энциклопедии, стихотворение. Не нужно специальных карточек!</p>
              </div>

              <div className="border-l-4 border-green-200 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">2. "Умное Ухо" Анализирует</h3>
                <p>Наша уникальная технология на основе искусственного интеллекта в режиме реального времени оценивает разборчивость речи ребенка.</p>
              </div>

              <div className="border-l-4 border-purple-200 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">3. Подробная Статистика Сразу</h3>
                <div className="ml-4 space-y-2">
                  <p>• Процент разборчивости: Насколько легко было понять речь ребенка?</p>
                  <p>• Типы и количество ошибок: Какие звуки вызывают сложности?</p>
                  <p>• Динамика прогресса: Сравнение с прошлыми результатами</p>
                  <p>• Сложные слова: Какие слова вызвали наибольшее затруднение?</p>
                </div>
              </div>

              <div className="border-l-4 border-orange-200 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">4. Учимся с Игрой</h3>
                <p>Встроенная система мотивации! Ребенок зарабатывает звездочки, медали и открывает новые уровни. Чтение становится веселым приключением!</p>
              </div>

              <div className="border-l-4 border-red-200 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">5. Совместная Работа с Специалистом</h3>
                <p>Создавайте и отправляйте подробные отчеты логопеду прямо из приложения.</p>
              </div>

              <div className="border-l-4 border-indigo-200 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">6. Личный Дневник Успеха</h3>
                <p>История всех тренировок в одном месте. Наблюдайте, как растет уверенность и четкость речи вашего ребенка день ото дня!</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Почему "Тренер Чтения" – идеальное решение для родителей?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">✓ Объективная Оценка</h3>
                <p className="text-sm">Точные, измеримые данные прогресса</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">✓ Экономия Времени</h3>
                <p className="text-sm">Занятия дома в удобное время</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">✓ Мотивация Ребенка</h3>
                <p className="text-sm">Игровой подход превращает упражнения в игру</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">✓ Простота и Удобство</h3>
                <p className="text-sm">Интуитивно понятный интерфейс</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-light mb-6">Дайте своему малышу ключ к ясной и уверенной речи!</h2>
            
            <p className="text-xl mb-8">Скачайте "Тренер Чтения" БЕСПЛАТНО прямо сейчас и получите:</p>
            
            <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
              <p>• 7 дней полного доступа ко всем функциям!</p>
              <p>• Персональные рекомендации по первым шагам!</p>
              <p>• Стартовый набор увлекательных текстов для чтения!</p>
            </div>

            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Скачать Бесплатно
            </button>
          </div>

          <div className="text-center">
            <p className="text-xl font-medium text-gray-800 mb-4">
              Тренер Чтения: Слушаем. Анализируем. Помогаем Говорить Ясно!
            </p>
            <p className="text-sm text-gray-600">
              P.S. Уже тысячи родителей заметили прогресс у своих детей с "Тренером Чтения". Присоединяйтесь! Первый шаг к четкой речи – всего одно касание.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
