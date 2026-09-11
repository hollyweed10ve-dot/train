const restSound = new Audio("sounds/50be6a16213ba29(1).mp3");
restSound.preload = "auto";


/* =========================================================
   ТРЕНИРОВКИ
========================================================= */

const workouts = {

    day1: {
        title: "День 1",
        subtitle: "Верх тела",

        exercises: [

            {
                name: "Подтягивания / Тяга верхнего блока",
                muscle: "Спина",
                sets: 3,
                reps: "8–12",
                rest: 90,

                technique:
                    "Начни движение с опускания и сведения лопаток. Затем тяни локти вниз и назад. В верхней точке не тянись шеей к перекладине и не раскачивай корпус.",

                attention: [
                    "Держи корпус стабильно",
                    "Тяни локтями, а не кистями",
                    "Не поднимай плечи к ушам",
                    "Контролируй возвращение веса"
                ],

                mistakes: [
                    "Раскачивание корпуса",
                    "Рывок в начале движения",
                    "Слишком большой вес",
                    "Работа только руками"
                ],

                tip:
                    "Если подтягивания пока тяжёлые, используй тягу верхнего блока. Последние повторения должны быть сложными, но без потери техники."
            },


            {
                name: "Жим гантелей лёжа",
                muscle: "Грудь",
                sets: 3,
                reps: "8–12",
                rest: 90,

                technique:
                    "Ляг на скамью, сведи и слегка опусти лопатки. Стопы уверенно стоят на полу. Опускай гантели контролируемо примерно к средней части груди, затем выжимай вверх.",

                attention: [
                    "Лопатки остаются сведёнными",
                    "Стопы устойчиво стоят на полу",
                    "Локти не разводи строго в стороны",
                    "Опускай гантели медленно"
                ],

                mistakes: [
                    "Отрыв таза от скамьи",
                    "Слишком быстрое опускание",
                    "Удар гантелей друг о друга",
                    "Слишком большой вес"
                ],

                tip:
                    "Не гонись за весом. Лучше сделать 10 качественных повторений, чем 10 повторений с нарушением положения плеч."
            },


            {
                name: "Тяга горизонтального блока",
                muscle: "Спина",
                sets: 3,
                reps: "10–12",
                rest: 90,

                technique:
                    "Сядь ровно, грудь слегка раскрыта. Начни движение со сведения лопаток и затем потяни рукоять к нижней части живота.",

                attention: [
                    "Сохраняй нейтральную спину",
                    "Локти движутся назад",
                    "Не поднимай плечи",
                    "Медленно возвращай рукоять"
                ],

                mistakes: [
                    "Сильное раскачивание корпуса",
                    "Округление поясницы",
                    "Рывок весом",
                    "Слишком короткая амплитуда"
                ],

                tip:
                    "Представь, что хочешь завести локти за спину. Это помогает лучше почувствовать работу мышц спины."
            },


            {
                name: "Жим гантелей сидя",
                muscle: "Плечи",
                sets: 3,
                reps: "10–12",
                rest: 90,

                technique:
                    "Сядь устойчиво, держи корпус напряжённым. Гантели находятся примерно на уровне плеч. Выжимай их вверх по контролируемой траектории и возвращай обратно без падения веса.",

                attention: [
                    "Не прогибай поясницу",
                    "Держи корпус стабильным",
                    "Двигай обеими руками синхронно",
                    "Контролируй опускание"
                ],

                mistakes: [
                    "Сильный прогиб в пояснице",
                    "Толчок ногами",
                    "Рывок гантелей",
                    "Слишком большой вес"
                ],

                tip:
                    "Если приходится сильно прогибаться, вес, скорее всего, слишком большой."
            },


            {
                name: "Сведения рук в кроссовере",
                muscle: "Грудь",
                sets: 3,
                reps: "12",
                rest: 90,

                technique:
                    "Слегка согни руки в локтях и сохрани этот угол. Своди рукояти перед собой плавным движением, сокращая грудные мышцы.",

                attention: [
                    "Локти слегка согнуты",
                    "Плечи остаются опущенными",
                    "Движение плавное",
                    "Не бросай вес назад"
                ],

                mistakes: [
                    "Слишком сильное сгибание рук",
                    "Рывки корпусом",
                    "Слишком большой вес",
                    "Слишком короткая амплитуда"
                ],

                tip:
                    "Здесь вес вторичен. Основная задача — почувствовать сокращение грудных мышц."
            },


            {
                name: "Махи гантелями в стороны",
                muscle: "Плечи",
                sets: 3,
                reps: "12–15",
                rest: 60,

                technique:
                    "Поднимай гантели через стороны до примерно уровня плеч. Локти слегка согнуты. Движение выполняй спокойно, без раскачивания корпуса.",

                attention: [
                    "Плечи не поднимай к ушам",
                    "Держи небольшой сгиб локтей",
                    "Поднимай руки примерно до уровня плеч",
                    "Опускай гантели медленно"
                ],

                mistakes: [
                    "Раскачивание корпуса",
                    "Рывок ногами",
                    "Слишком тяжёлые гантели",
                    "Подъём значительно выше плеч"
                ],

                tip:
                    "Для махов обычно лучше лёгкий вес и идеальный контроль, чем тяжёлые гантели."
            }

        ]
    },


    /* =====================================================
       ДЕНЬ 2
    ===================================================== */

    day2: {
        title: "День 2",
        subtitle: "Низ тела + руки",

        exercises: [

            {
                name: "Ягодичный мостик / Hip Thrust",
                muscle: "Ягодицы",
                sets: 3,
                reps: "10–12",
                rest: 90,

                technique:
                    "Опирайся верхней частью спины на скамью. Стопы поставь устойчиво. Поднимай таз за счёт ягодиц, пока корпус и бёдра не образуют почти прямую линию.",

                attention: [
                    "Толкайся всей стопой",
                    "В верхней точке напряги ягодицы",
                    "Сохраняй корпус стабильным",
                    "Опускай таз контролируемо"
                ],

                mistakes: [
                    "Сильный прогиб поясницы",
                    "Толчок только носками",
                    "Слишком быстрые повторения",
                    "Переразгибание в верхней точке"
                ],

                tip:
                    "В верхней точке сделай короткую паузу и максимально напряги ягодицы."
            },


            {
                name: "Жим ногами",
                muscle: "Ноги",
                sets: 3,
                reps: "8–12",
                rest: 90,

                technique:
                    "Поставь стопы устойчиво на платформу. Опускай платформу контролируемо, сохраняя естественное положение таза и спины. Затем выжимай платформу без резкого разгибания коленей.",

                attention: [
                    "Стопы полностью на платформе",
                    "Колени движутся в направлении носков",
                    "Не отрывай таз от спинки",
                    "Не блокируй колени вверху"
                ],

                mistakes: [
                    "Слишком глубокое опускание без контроля",
                    "Сведение коленей внутрь",
                    "Отрыв таза",
                    "Резкое разгибание коленей"
                ],

                tip:
                    "Начинай с комфортной амплитуды и постепенно увеличивай её только при полном контроле движения."
            },


            {
                name: "Гиперэкстензия",
                muscle: "Спина / ягодицы",
                sets: 3,
                reps: "8–12",
                rest: 90,

                technique:
                    "Зафиксируй ноги и сохраняй нейтральное положение позвоночника. Опускай корпус за счёт движения в тазобедренном суставе, затем возвращайся вверх.",

                attention: [
                    "Спина остаётся нейтральной",
                    "Движение начинается от таза",
                    "Не переразгибай поясницу",
                    "Поднимай корпус плавно"
                ],

                mistakes: [
                    "Сильное округление спины",
                    "Переразгибание поясницы",
                    "Рывки",
                    "Слишком большой вес"
                ],

                tip:
                    "Представь, что твоя спина — одна неподвижная линия, а основное движение происходит в тазобедренном суставе."
            },


            {
                name: "Разгибания ног",
                muscle: "Квадрицепс",
                sets: 3,
                reps: "12",
                rest: 90,

                technique:
                    "Сядь плотно к спинке тренажёра. Плавно разгибай ноги до комфортного положения и медленно возвращай вес обратно.",

                attention: [
                    "Плотно прижми спину",
                    "Двигайся плавно",
                    "Не бросай вес вниз",
                    "Контролируй каждое повторение"
                ],

                mistakes: [
                    "Рывок ногами",
                    "Слишком большой вес",
                    "Ударное разгибание",
                    "Быстрое опускание веса"
                ],

                tip:
                    "Здесь особенно важен контроль обратной фазы — не позволяй весу просто падать вниз."
            },


            {
                name: "Сгибания на скамье Скотта",
                muscle: "Бицепс",
                sets: 3,
                reps: "10–12",
                rest: 90,

                technique:
                    "Плотно расположи руки на подушке. Сгибай локти, поднимая вес к плечам, затем медленно опускай его почти до полного разгибания.",

                attention: [
                    "Локти остаются на опоре",
                    "Не раскачивай корпус",
                    "Контролируй опускание",
                    "Не бросай вес в нижней точке"
                ],

                mistakes: [
                    "Отрыв локтей от подушки",
                    "Раскачивание",
                    "Рывки",
                    "Слишком большой вес"
                ],

                tip:
                    "Медленное опускание веса отлично нагружает бицепс даже при умеренном рабочем весе."
            },


            {
                name: "Разгибания рук с канатом",
                muscle: "Трицепс",
                sets: 3,
                reps: "10–12",
                rest: 90,

                technique:
                    "Держи локти около корпуса. Разгибай руки вниз, двигая предплечьями, затем контролируемо возвращайся вверх.",

                attention: [
                    "Локти держи близко к корпусу",
                    "Плечи остаются неподвижными",
                    "Полностью контролируй движение",
                    "Внизу слегка разводи концы каната"
                ],

                mistakes: [
                    "Движение всем корпусом",
                    "Уход локтей вперёд-назад",
                    "Рывки",
                    "Слишком большой вес"
                ],

                tip:
                    "Если приходится наклоняться всем телом, уменьши вес — трицепс должен выполнять основную работу."
            }

        ]
    },


    /* =====================================================
       ДЕНЬ 5
    ===================================================== */

    day5: {
        title: "День 5",
        subtitle: "Full Body",

        exercises: [

            {
                name: "Жим штанги лёжа",
                muscle: "Грудь",
                sets: 3,
                reps: "8–12",
                rest: 90,

                technique:
                    "Лопатки сведены и опущены, стопы устойчиво стоят на полу. Опускай штангу контролируемо к нижней или средней части груди и выжимай вверх.",

                attention: [
                    "Лопатки остаются сведёнными",
                    "Стопы устойчивы",
                    "Гриф движется контролируемо",
                    "Не бросай штангу на грудь"
                ],

                mistakes: [
                    "Отрыв таза",
                    "Слишком быстрый спуск",
                    "Разведение локтей строго в стороны",
                    "Работа с весом без контроля"
                ],

                tip:
                    "Если работаешь с тяжёлым весом, используй страховку или страхующего человека."
            },


            {
                name: "Становая тяга",
                muscle: "Спина / ноги",
                sets: 3,
                reps: "6–10",
                rest: 90,

                technique:
                    "Стой устойчиво, гриф находится близко к ногам. Отведи таз назад, сохраняя нейтральную спину, возьми гриф и встань за счёт совместной работы ног и таза.",

                attention: [
                    "Гриф остаётся близко к телу",
                    "Спина нейтральная",
                    "Напряги корпус перед подъёмом",
                    "Движение начинается с пола без рывка"
                ],

                mistakes: [
                    "Округление поясницы",
                    "Рывок штанги с пола",
                    "Гриф далеко от ног",
                    "Переразгибание в верхней точке"
                ],

                tip:
                    "Техника важнее веса. Если положение спины начинает нарушаться, снизь рабочий вес."
            },


            {
                name: "Тяга верхнего блока",
                muscle: "Спина",
                sets: 3,
                reps: "8–12",
                rest: 90,

                technique:
                    "Сядь устойчиво и начни движение со сведения лопаток. Тяни рукоять вниз к верхней части груди, затем медленно возвращай её вверх.",

                attention: [
                    "Грудь слегка раскрыта",
                    "Плечи не поднимай",
                    "Тяни локтями вниз",
                    "Контролируй обратное движение"
                ],

                mistakes: [
                    "Сильное отклонение корпуса",
                    "Рывок",
                    "Тяга только руками",
                    "Слишком большой вес"
                ],

                tip:
                    "Не обязательно тянуть рукоять как можно ниже. Главное — качественно сократить мышцы спины."
            },


            {
                name: "Присед в машине Смита",
                muscle: "Ноги",
                sets: 3,
                reps: "8–12",
                rest: 90,

                technique:
                    "Поставь стопы и корпус устойчиво относительно грифа. Садись вниз контролируемо, направляя колени в сторону носков, затем вставай через всю стопу.",

                attention: [
                    "Колени направлены по линии носков",
                    "Стопы полностью контактируют с полом",
                    "Корпус остаётся стабильным",
                    "Контролируй глубину"
                ],

                mistakes: [
                    "Колени заваливаются внутрь",
                    "Отрыв пяток",
                    "Резкое движение вниз",
                    "Потеря контроля корпуса"
                ],

                tip:
                    "Выбери такую глубину, на которой можешь сохранять стабильное положение корпуса и коленей."
            },


            {
                name: "Жим гантелей сидя",
                muscle: "Плечи",
                sets: 3,
                reps: "10–12",
                rest: 90,

                technique:
                    "Сохраняй стабильное положение корпуса. Гантели находятся около плеч. Выжимай их вверх без рывка и контролируемо возвращай вниз.",

                attention: [
                    "Корпус стабильный",
                    "Не прогибай поясницу",
                    "Движение плавное",
                    "Обе руки работают синхронно"
                ],

                mistakes: [
                    "Сильный прогиб",
                    "Толчок ногами",
                    "Рывки",
                    "Слишком большой вес"
                ],

                tip:
                    "Если техника начинает разрушаться уже в середине подхода, снизь вес."
            },


            {
                name: "Сгибания на скамье Скотта",
                muscle: "Бицепс",
                sets: 3,
                reps: "10–12",
                rest: 90,

                technique:
                    "Плотно расположи руки на подушке. Сгибай локти плавно, затем медленно опускай вес, сохраняя контроль.",

                attention: [
                    "Локти остаются на опоре",
                    "Не раскачивайся",
                    "Медленно опускай вес",
                    "Работай полной комфортной амплитудой"
                ],

                mistakes: [
                    "Отрыв локтей",
                    "Рывки",
                    "Слишком большой вес",
                    "Быстрое опускание"
                ],

                tip:
                    "Сделай акцент на медленной отрицательной фазе — примерно 2–3 секунды."
            },


            {
                name: "Разгибания рук с канатом",
                muscle: "Трицепс",
                sets: 3,
                reps: "10–12",
                rest: 90,

                technique:
                    "Зафиксируй локти возле корпуса и разгибай руки вниз. В нижней точке полностью сократи трицепс, затем плавно вернись обратно.",

                attention: [
                    "Локти неподвижны",
                    "Плечи не двигаются",
                    "Движение контролируемое",
                    "Не используй корпус для раскачивания"
                ],

                mistakes: [
                    "Локти гуляют вперёд-назад",
                    "Раскачивание",
                    "Рывок",
                    "Слишком большой вес"
                ],

                tip:
                    "Попробуй сделать паузу на секунду в нижней точке — это помогает почувствовать работу трицепса."
            }

        ]
    }
};


/* =========================================================
   ГЛАВНЫЙ ЭКРАН
========================================================= */

document.querySelectorAll(".workout-card").forEach((button, index) => {

    button.addEventListener("click", () => {

        if (index === 0) {
            openWorkout("day1");
        }

        if (index === 1) {
            openWorkout("day2");
        }

        if (index === 2) {
            openWorkout("day5");
        }

        if (index === 3) {
            alert("Бассейн добавим следующим шагом 🏊");
        }

        if (index === 4) {
            alert("Дни отдыха");
        }

    });

});


/* =========================================================
   ДАННЫЕ УПРАЖНЕНИЙ
========================================================= */

function getExerciseKey(workoutId, exerciseIndex) {

    return `exercise_${workoutId}_${exerciseIndex}`;

}


function getExerciseData(workoutId, exerciseIndex) {

    const key =
        getExerciseKey(workoutId, exerciseIndex);

    const saved =
        localStorage.getItem(key);


    if (saved) {

        try {

            return JSON.parse(saved);

        } catch (error) {

            console.log(
                "Ошибка чтения данных упражнения"
            );

        }

    }


    return {
        sets: []
    };

}


function saveSet(
    workoutId,
    exerciseIndex,
    setNumber,
    weight,
    reps
) {

    const data =
        getExerciseData(
            workoutId,
            exerciseIndex
        );


    if (!Array.isArray(data.sets)) {
        data.sets = [];
    }


    data.sets[setNumber - 1] = {

        weight: weight,

        reps: reps

    };


    localStorage.setItem(

        getExerciseKey(
            workoutId,
            exerciseIndex
        ),

        JSON.stringify(data)

    );

}


/* =========================================================
   ИСТОРИЯ
========================================================= */

function getWorkoutHistory() {

    const saved =
        localStorage.getItem(
            "workoutHistory"
        );


    if (!saved) {
        return [];
    }


    try {

        const history =
            JSON.parse(saved);


        if (Array.isArray(history)) {
            return history;
        }


        return [];

    } catch (error) {

        console.log(
            "Ошибка чтения истории тренировок"
        );

        return [];

    }

}


function saveWorkoutToHistory(workoutId) {

    const workout =
        workouts[workoutId];


    if (!workout) {
        return;
    }


    const history =
        getWorkoutHistory();


    const workoutRecord = {

        id: Date.now(),

        workoutId: workoutId,

        title: workout.title,

        subtitle: workout.subtitle,

        date: new Date().toISOString(),

        exercises: []

    };


    workout.exercises.forEach(
        (exercise, index) => {

            const data =
                getExerciseData(
                    workoutId,
                    index
                );


            const completedSets =
                Array.isArray(data.sets)
                    ? data.sets.filter(
                        set => set
                    )
                    : [];


            workoutRecord.exercises.push({

                name: exercise.name,

                muscle: exercise.muscle,

                sets:
                    completedSets.map(set => ({

                        weight: set.weight,

                        reps: set.reps

                    }))

            });

        }
    );


    history.unshift(
        workoutRecord
    );


    localStorage.setItem(

        "workoutHistory",

        JSON.stringify(history)

    );

}


function formatHistoryDate(dateString) {

    const date =
        new Date(dateString);


    return date.toLocaleDateString(
        "ru-RU",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );

}


function formatHistoryTime(dateString) {

    const date =
        new Date(dateString);


    return date.toLocaleTimeString(
        "ru-RU",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}


/* =========================================================
   ОТКРЫТИЕ ТРЕНИРОВКИ
========================================================= */

function openWorkout(workoutId) {

    const workout =
        workouts[workoutId];


    if (!workout) {
        return;
    }


    let html = `

        <div class="app">

            <header class="header">

                <button
                    onclick="location.reload()"
                    style="
                        border:none;
                        background:none;
                        padding:0;
                        font-size:17px;
                        color:#777;
                        margin-bottom:15px;
                        cursor:pointer;
                    "
                >
                    ‹ Назад
                </button>

                <h1>
                    ${workout.title}
                </h1>

                <p>
                    ${workout.subtitle}
                </p>

            </header>


            <main>

                <section class="exercise-list">

    `;


    workout.exercises.forEach(
        (exercise, index) => {

            const data =
                getExerciseData(
                    workoutId,
                    index
                );


            const completedSets =
                Array.isArray(data.sets)
                    ? data.sets.filter(
                        set => set
                    ).length
                    : 0;


            let buttonText =
                "Начать";


            let nextSet =
                1;


            if (
                completedSets > 0 &&
                completedSets < exercise.sets
            ) {

                buttonText =
                    "Продолжить";

                nextSet =
                    completedSets + 1;

            }


            if (
                completedSets >=
                exercise.sets
            ) {

                buttonText =
                    "Повторить";

                nextSet =
                    1;

            }


            html += `

                <div class="exercise-card">

                    <div class="exercise-number">
                        ${index + 1}
                    </div>


                    <div class="exercise-info">

                        <h2>
                            ${exercise.name}
                        </h2>

                        <p>
                            ${exercise.muscle}
                        </p>


                        <div class="exercise-details">

                            <span>
                                ${exercise.sets} подхода
                            </span>

                            <span>
                                ${exercise.reps} повторений
                            </span>

                            ${
                                completedSets > 0
                                ?
                                `
                                <span>
                                    Выполнено
                                    ${completedSets}/${exercise.sets}
                                </span>
                                `
                                :
                                ""
                            }

                        </div>

                    </div>


                    <button
                        class="start-button"
                        onclick="
                            startExercise(
                                ${index},
                                '${workoutId}',
                                ${nextSet}
                            )
                        "
                    >
                        ${buttonText}
                    </button>

                </div>

            `;

        }
    );


    html += `

                </section>


                <section class="abs-card">

                    <div>

                        <h2>
                            Пресс
                        </h2>

                        <p>
                            3 подхода до жжения
                        </p>

                    </div>


                    <button
                        class="start-button"
                        onclick="startAbs()"
                    >
                        Пресс
                    </button>

                </section>


                <section
                    class="abs-card"
                    style="margin-top:20px;"
                >

                    <div>

                        <h2>
                            История тренировок
                        </h2>

                        <p>
                            Посмотреть предыдущие тренировки
                        </p>

                    </div>


                    <button
                        class="start-button"
                        onclick="showWorkoutHistory()"
                    >
                        История
                    </button>

                </section>

            </main>

        </div>

    `;


    document.body.innerHTML =
        html;

}


/* =========================================================
   ЭКРАН УПРАЖНЕНИЯ
========================================================= */

function startExercise(
    index,
    workoutId,
    setNumber = 1
) {

    const exercise =
        workouts[workoutId]
            .exercises[index];


    const data =
        getExerciseData(
            workoutId,
            index
        );


    const previousSet =
        data.sets[setNumber - 1];


    const previousWeight =
        previousSet
            ? previousSet.weight
            : "";


    const previousReps =
        previousSet
            ? previousSet.reps
            : "";


    window.currentExercise = {

        index: index,

        workoutId: workoutId,

        currentSet: setNumber,

        totalSets: exercise.sets,

        rest: exercise.rest

    };


    document.body.innerHTML = `

        <div class="app">

            <header class="header">

                <button
                    onclick="
                        clearInterval(
                            window.restInterval
                        );

                        openWorkout(
                            '${workoutId}'
                        );
                    "
                    style="
                        border:none;
                        background:none;
                        padding:0;
                        font-size:17px;
                        color:#777;
                        margin-bottom:15px;
                        cursor:pointer;
                    "
                >
                    ‹ Назад
                </button>


                <h1>
                    ${exercise.name}
                </h1>


                <p>
                    ${exercise.muscle}
                </p>

            </header>


            <main>

                <div class="workout-screen">


                    <div class="set-progress">
                        Подход
                        ${setNumber}
                        из
                        ${exercise.sets}
                    </div>


                    <div class="exercise-target">
                        Цель:
                        ${exercise.reps}
                        повторений
                    </div>


                    <!-- ТЕХНИКА -->

                    <div
                        class="input-card"
                        style="
                            text-align:left;
                            line-height:1.5;
                        "
                    >

                        <h3
                            style="
                                margin-top:0;
                                margin-bottom:8px;
                            "
                        >
                            💡 Техника
                        </h3>


                        <p
                            style="
                                margin:0;
                            "
                        >
                            ${exercise.technique}
                        </p>

                    </div>


                    <!-- НА ЧТО ОБРАТИТЬ ВНИМАНИЕ -->

                    <div
                        class="input-card"
                        style="
                            text-align:left;
                        "
                    >

                        <h3
                            style="
                                margin-top:0;
                                margin-bottom:8px;
                            "
                        >
                            🎯 Обрати внимание
                        </h3>


                        <ul
                            style="
                                margin:0;
                                padding-left:20px;
                                line-height:1.6;
                            "
                        >

                            ${exercise.attention.map(
                                item =>
                                `<li>${item}</li>`
                            ).join("")}

                        </ul>

                    </div>


                    <!-- ЧАСТЫЕ ОШИБКИ -->

                    <div
                        class="input-card"
                        style="
                            text-align:left;
                        "
                    >

                        <h3
                            style="
                                margin-top:0;
                                margin-bottom:8px;
                            "
                        >
                            ⚠️ Частые ошибки
                        </h3>


                        <ul
                            style="
                                margin:0;
                                padding-left:20px;
                                line-height:1.6;
                            "
                        >

                            ${exercise.mistakes.map(
                                item =>
                                `<li>${item}</li>`
                            ).join("")}

                        </ul>

                    </div>


                    <!-- СОВЕТ -->

                    <div
                        class="input-card"
                        style="
                            text-align:left;
                        "
                    >

                        <h3
                            style="
                                margin-top:0;
                                margin-bottom:8px;
                            "
                        >
                            ⭐ Полезный совет
                        </h3>


                        <p
                            style="
                                margin:0;
                                line-height:1.5;
                            "
                        >
                            ${exercise.tip}
                        </p>

                    </div>


                    <!-- ВЕС -->

                    <div class="input-card">

                        <label>
                            Вес, кг
                        </label>


                        <input
                            id="weightInput"
                            type="number"
                            inputmode="decimal"
                            placeholder="Например, 20"
                            value="${previousWeight}"
                        >

                    </div>


                    <!-- ПОВТОРЕНИЯ -->

                    <div class="input-card">

                        <label>
                            Повторения
                        </label>


                        <input
                            id="repsInput"
                            type="number"
                            inputmode="numeric"
                            placeholder="Например, 10"
                            value="${previousReps}"
                        >

                    </div>


                    <button
                        class="complete-set-button"
                        onclick="
                            completeSet(
                                ${index},
                                '${workoutId}'
                            )
                        "
                    >
                        Завершить подход
                    </button>


                    <div class="rest-info">

                        Отдых между подходами:
                        ${exercise.rest}
                        сек

                    </div>


                </div>

            </main>

        </div>

    `;

}


/* =========================================================
   ЗАВЕРШЕНИЕ ПОДХОДА
========================================================= */

function completeSet(
    index,
    workoutId
) {

    const weight =
        document.getElementById(
            "weightInput"
        ).value;


    const reps =
        document.getElementById(
            "repsInput"
        ).value;


    if (!weight || !reps) {

        alert(
            "Укажи вес и количество повторений"
        );

        return;

    }


    const state =
        window.currentExercise;


    saveSet(

        workoutId,

        index,

        state.currentSet,

        weight,

        reps

    );


    const exercise =
        workouts[workoutId]
            .exercises[index];


    /*
       Последний подход упражнения
    */

    if (
        state.currentSet >=
        state.totalSets
    ) {

        const nextExerciseIndex =
            index + 1;


        /*
           Следующее упражнение
        */

        if (
            nextExerciseIndex <
            workouts[workoutId]
                .exercises.length
        ) {

            alert(
                `Упражнение завершено! 🎉\n\n` +
                `${exercise.name}\n\n` +
                `Переходим к следующему упражнению`
            );


            startExercise(

                nextExerciseIndex,

                workoutId,

                1

            );


            return;

        }


        /*
           Последнее упражнение
        */

        saveWorkoutToHistory(
            workoutId
        );


        alert(
            `Тренировка завершена! 🎉\n\n` +
            `Все упражнения выполнены.\n\n` +
            `Тренировка сохранена в историю.`
        );


        openWorkout(
            workoutId
        );


        return;

    }


    /*
       Следующий подход
    */

    const nextSet =
        state.currentSet + 1;


    state.currentSet =
        nextSet;


    showRestTimer(

        nextSet,

        state.totalSets,

        state.rest,

        index,

        workoutId

    );

}


/* =========================================================
   ТАЙМЕР ОТДЫХА
========================================================= */

function showRestTimer(
    nextSet,
    totalSets,
    restSeconds,
    index,
    workoutId
) {

    let seconds =
        restSeconds;


    document.body.innerHTML = `

        <div class="app">

            <header class="header">

                <button
                    onclick="
                        clearInterval(
                            window.restInterval
                        );

                        openWorkout(
                            '${workoutId}'
                        );
                    "
                    style="
                        border:none;
                        background:none;
                        padding:0;
                        font-size:17px;
                        color:#777;
                        margin-bottom:15px;
                        cursor:pointer;
                    "
                >
                    ‹ Назад
                </button>


                <h1>
                    Отдых
                </h1>


                <p>
                    Подготовься к следующему подходу
                </p>

            </header>


            <main>

                <div class="timer-screen">


                    <div class="timer-label">
                        Следующий подход
                    </div>


                    <div
                        id="restTimer"
                        class="rest-timer"
                    >
                        ${formatTime(seconds)}
                    </div>


                    <div class="next-set">
                        Подход
                        ${nextSet}
                        из
                        ${totalSets}
                    </div>


                    <button
                        class="skip-rest-button"
                        onclick="
                            clearInterval(
                                window.restInterval
                            );

                            startExercise(
                                ${index},
                                '${workoutId}',
                                ${nextSet}
                            );
                        "
                    >
                        Пропустить отдых
                    </button>


                </div>

            </main>

        </div>

    `;


    clearInterval(
        window.restInterval
    );


    window.restInterval =
        setInterval(() => {

            seconds--;


            const timer =
                document.getElementById(
                    "restTimer"
                );


            if (timer) {

                timer.textContent =
                    formatTime(seconds);

            }


            if (seconds <= 0) {

                clearInterval(
                    window.restInterval
                );


                /*
                   Звуковое уведомление
                */

                restSound.currentTime = 0;


                restSound.play().catch(
                    error => {

                        console.log(
                            "Не удалось воспроизвести звук:",
                            error
                        );

                    }
                );


                startExercise(

                    index,

                    workoutId,

                    nextSet

                );

            }

        }, 1000);

}


/* =========================================================
   ФОРМАТ ВРЕМЕНИ
========================================================= */

function formatTime(seconds) {

    const minutes =
        Math.floor(seconds / 60);


    const remaining =
        seconds % 60;


    return (

        String(minutes)
            .padStart(2, "0")

        +

        ":"

        +

        String(remaining)
            .padStart(2, "0")

    );

}


/* =========================================================
   ИСТОРИЯ ТРЕНИРОВОК
========================================================= */

function showWorkoutHistory() {

    const history =
        getWorkoutHistory();


    let html = `

        <div class="app">

            <header class="header">

                <button
                    onclick="location.reload()"
                    style="
                        border:none;
                        background:none;
                        padding:0;
                        font-size:17px;
                        color:#777;
                        margin-bottom:15px;
                        cursor:pointer;
                    "
                >
                    ‹ Назад
                </button>


                <h1>
                    История тренировок
                </h1>


                <p>
                    Твои завершённые тренировки
                </p>

            </header>


            <main>

    `;


    if (history.length === 0) {

        html += `

            <section class="abs-card">

                <div>

                    <h2>
                        Пока пусто
                    </h2>


                    <p>
                        После завершения первой
                        тренировки она появится здесь.
                    </p>

                </div>

            </section>

        `;

    } else {

        history.forEach(
            workoutRecord => {

                html += `

                    <section
                        class="abs-card"
                        style="
                            margin-bottom:20px;
                        "
                    >

                        <div>

                            <h2>
                                ${workoutRecord.title}
                            </h2>


                            <p>
                                ${workoutRecord.subtitle}
                            </p>


                            <p
                                style="
                                    margin-top:8px;
                                "
                            >
                                ${formatHistoryDate(
                                    workoutRecord.date
                                )}

                                ·

                                ${formatHistoryTime(
                                    workoutRecord.date
                                )}
                            </p>

                        </div>

                    </section>


                    <section
                        class="exercise-list"
                        style="
                            margin-bottom:25px;
                        "
                    >

                `;


                workoutRecord.exercises.forEach(
                    exercise => {

                        html += `

                            <div
                                class="exercise-card"
                            >

                                <div
                                    class="exercise-info"
                                >

                                    <h2>
                                        ${exercise.name}
                                    </h2>


                                    <p>
                                        ${exercise.muscle}
                                    </p>


                                    <div
                                        class="exercise-details"
                                    >

                        `;


                        if (
                            exercise.sets &&
                            exercise.sets.length > 0
                        ) {

                            exercise.sets.forEach(
                                (set, setIndex) => {

                                    html += `

                                        <span>
                                            ${setIndex + 1}.
                                            ${set.weight}
                                            кг ×
                                            ${set.reps}
                                        </span>

                                    `;

                                }
                            );

                        } else {

                            html += `

                                <span>
                                    Нет данных
                                </span>

                            `;

                        }


                        html += `

                                    </div>

                                </div>

                            </div>

                        `;

                    }
                );


                html += `

                    </section>

                `;

            }
        );

    }


    html += `

            </main>

        </div>

    `;


    document.body.innerHTML =
        html;

}


/* =========================================================
   ПРЕСС
========================================================= */

function startAbs() {

    alert(

        "Пресс\n\n" +

        "Выбери упражнение:\n\n" +

        "• Скручивания\n" +

        "• Подъём ног в висе\n" +

        "• Планка\n\n" +

        "3 подхода до жжения\n" +

        "Отдых — 1 минута"

    );

}