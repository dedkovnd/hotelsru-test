##1. Студенты покупают пирожки

Каждому студенту соответствует сумма в скобках, где х - количество пирожков

(1/3*x + 2) + (1/4*x + 3) + (1/5*x + 8) = x

убираем скобки

1/3*x + 1/4*x + 1/5*x + 13 = x

приводим к общему знаменателю 

20/60*x + 15/60*x + 12/60*x + 13 = x

решаем уравнение 

47/60*x + 13 = x

13 = x - 47/60*x
13 = (60/60*x - 47/60*x)
13 = (13/60)*x
780 = 13*x
х = 60



##2. Взвешивание монет 

Нужно разделить монеты на три группы: группа1 - 3 монеты, группа2 - 3 монеты, группа3 - две монеты. Если группа1 и группа2 равны, то одна из двух монет в группе3 тяжелая. Второе взвешивание тратим на то, чтобы узнать какая. Если группа1 или группа2 тяжелее, второе взвешивание тратим на то, чтобы взвесить любые две монеты из тяжелой группы. Если они равны, значит третья монета из тяжелой группы тяжелая, если одна тяжелее, значит задача также выполнена. Итого - два взвешивания

##3. Расставить числа 3-11 в квадрат 3 на 3 клетки

В данном списке есть пары чисел, которые дадут одинаковый результат умножения

x 3 10 - первый ряд и первый столбец 30
6 y 4  - второй - 24
5 8 z  - третий - 40

Остается подставить оставшиеся три числа, чтобы они были общими множителями для строки и столбца

7 3 10
6 9 4
5 8 11

##4. Определяем прочность предметов

После того, как первый предмет разобьется, нам необходимо использовать второй, для поиска перебором

Чтобы минимизировать количество операций перебора и рассчитать шаг, с которым надо увеличивать высоту броска первого предмета, надо решить уравнение, основанное на арифметической прогрессии x+(x-1)+(x-2)+...+1 >= 5000

Решение будет не целым числом, что бывает с квадратными уравнениями, ближайший целый ответ - 100

Таким образом первый предмет бросаем с высоты 100, 199, 297 и тд. Он разбивается, далее  бросаем второй предмет в обратном направлении уменьшая высоту на метр
