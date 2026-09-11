const restSound = new Audio("sounds/50be6a16213ba29(1).mp3");
restSound.preload = "auto";

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
                technique: "Подтягивайся за счёт мышц спины, не раскачивай корпус. Если подтягивания пока тяжёлые — используй тягу верхнего блока.",
                attention: [
                    "Не поднимай плечи к ушам.",
                    "Держи корпус стабильным.",
                    "Тяни локти вниз и назад."
                ],
                mistakes: [
                    "Раскачивание корпуса.",
                    "Рывок в начале движения.",
                    "Слишком короткая амплитуда."
                ],
                tip: "Представь, что тянешь локти к тазу."
            },
            {
                name: "Жим гантелей лёжа",
                muscle: "Грудь",
                sets: 3,
                reps: "8–12",
                rest: 90,
                technique: "Ляг на скамью, сведи лопатки и опусти гантели контролируемо к нижней части груди.",
                attention: [
                    "Лопатки сведены.",
                    "Стопы уверенно стоят на полу.",
                    "Не бросай гантели вниз."
                ],
                mistakes: [
                    "Разведение локтей строго в стороны.",
                    "Отрыв таза от скамьи.",
                    "Слишком быстрый негатив."
                ],
                tip: "Опускай гантели примерно 2 секунды."
            },
            {
                name: "Тяга горизонтального блока",
                muscle: "Спина",
                sets: 3,
                reps: "10–12",
                rest: 90,
                technique: "Сохраняй нейтральную спину и тяни рукоять к нижней части живота.",
                attention: [
                    "Не округляй поясницу.",
                    "Начинай движение лопатками.",
                    "Не раскачивай корпус."
                ],
                mistakes: [
                    "Сильное отклонение назад.",
                    "Работа только руками.",
                    "Рывки."
                ],
                tip: "В конце движения слегка своди лопатки."
            },
            {
                name: "Жим гантелей сидя",
                muscle: "Плечи",
                sets: 3,
                reps: "10–12",
                rest: 90,
                technique: "Сиди устойчиво, держи гантели около уровня ушей и выжимай их вверх без резкого разгибания локтей.",
                attention: [
                    "Не прогибай поясницу.",
                    "Контролируй опускание.",
                    "Не сталкивай гантели наверху."
                ],
                mistakes: [
                    "Сильный прогиб.",
                    "Слишком большой вес.",
                    "Рывок ногами."
                ],
                tip: "Работай плавно и не гонись за весом."
            },
            {
                name: "Сведения рук в кроссовере",
                muscle: "Грудь",
                sets: 3,
                reps: "12",
                rest: 90,
                technique: "Слегка согни локти и своди руки перед корпусом, сохраняя напряжение груди.",
                attention: [
                    "Не разгибай локти полностью.",
                    "Контролируй возврат.",
                    "Не используй инерцию."
                ],
                mistakes: [
                    "Слишком большой вес.",
                    "Рывки корпусом.",
                    "Полное расслабление в верхней точке."
                ],
                tip: "Сконцентрируйся на сведении груди."
            },
            {
                name: "Махи гантелями в стороны",
                muscle: "Плечи",
                sets: 3,
                reps: "12–15",
                rest: 60,
                technique: "Поднимай гантели в стороны до примерно уровня плеч, сохраняя небольшой сгиб в локтях.",
                attention: [
                    "Плечи не поднимай к ушам.",
                    "Движение выполняй плавно.",
                    "Используй умеренный вес."
                ],
                mistakes: [
                    "Раскачивание.",
                    "Слишком большой вес.",
                    "Рывок корпусом."
                ],
                tip: "Лучше лёгкие гантели и чистая техника."
            }
        ]
    },

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
                technique: "Поднимай таз за счёт ягодиц, в верхней точке слегка подкручивай таз.",
                attention: [
                    "Не переразгибай поясницу.",
                    "Колени направлены вперёд.",
                    "Задержись вверху."
                ],
                mistakes: [
                    "Работа поясницей.",
                    "Слишком высокая амплитуда.",
                    "Завал коленей внутрь."
                ],
                tip: "В верхней точке сильно напряги ягодицы."
            },
            {
                name: "Жим ногами",
                muscle: "Ноги",
                sets: 3,
                reps: "8–12",
                rest: 90,
                technique: "Опускай платформу контролируемо, сохраняя устойчивое положение таза и коленей.",
                attention: [
                    "Колени направлены по линии стоп.",
                    "Не отрывай таз.",
                    "Не запирай колени."
                ],
                mistakes: [
                    "Слишком глубокая амплитуда.",
                    "Завал коленей внутрь.",
                    "Полное разгибание коленей."
                ],
                tip: "Выбирай комфортную глубину без боли."
            },
            {
                name: "Гиперэкстензия",
                muscle: "Спина / ягодицы",
                sets: 3,
                reps: "8–12",
                rest: 90,
                technique: "Опускай корпус с прямой спиной и поднимайся за счёт ягодиц и разгибателей спины.",
                attention: [
                    "Не переразгибай поясницу.",
                    "Движение плавное.",
                    "Шея нейтральна."
                ],
                mistakes: [
                    "Резкое разгибание.",
                    "Сильный прогиб.",
                    "Движение шеей."
                ],
                tip: "Думай о движении тазом, а не головой."
            },
            {
                name: "Разгибания ног",
                muscle: "Квадрицепс",
                sets: 3,
                reps: "12",
                rest: 90,
                technique: "Разгибай ноги плавно и контролируй обратное движение.",
                attention: [
                    "Не используй инерцию.",
                    "Контролируй опускание.",
                    "Не ставь чрезмерный вес."
                ],
                mistakes: [
                    "Рывок вверх.",
                    "Бросок вниз.",
                    "Слишком большой вес."
                ],
                tip: "Особенно контролируй последние сантиметры опускания."
            },
            {
                name: "Сгибания на скамье Скотта",
                muscle: "Бицепс",
                sets: 3,
                reps: "10–12",
                rest: 90,
                technique: "Сгибай руки без отрыва плеч от подушки.",
                attention: [
                    "Не раскачивай корпус.",
                    "Не разгибай резко локти.",
                    "Контролируй негатив."
                ],
                mistakes: [
                    "Рывки.",
                    "Отрыв плеч.",
                    "Слишком большой вес."
                ],
                tip: "Опускай вес медленнее, чем поднимаешь."
            },
            {
                name: "Разгибания рук с канатом",
                muscle: "Трицепс",
                sets: 3,
                reps: "10–12",
                rest: 90,
                technique: "Локти держи возле корпуса и разгибай руки вниз.",
                attention: [
                    "Локти стабильны.",
                    "Не раскачивайся.",
                    "Полностью сокращай трицепс."
                ],
                mistakes: [
                    "Движение плечами.",
                    "Раскачивание.",
                    "Слишком большой вес."
                ],
                tip: "В нижней точке слегка разведи концы каната."
            }
        ]
    },

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
                technique: "Сведи лопатки, поставь стопы устойчиво и контролируемо опускай штангу к груди.",
                attention: [
                    "Лопатки сведены.",
                    "Стопы стоят устойчиво.",
                    "Контролируй штангу."
                ],
                mistakes: [
                    "Отрыв таза.",
                    "Рывок со стойки.",
                    "Слишком большой вес."
                ],
                tip: "Оставляй 1–2 повтора в запасе."
            },
            {
                name: "Становая тяга",
                muscle: "Спина / ноги",
                sets: 3,
                reps: "6–10",
                rest: 90,
                technique: "Сохраняй нейтральную спину, отводи таз назад и поднимай штангу близко к телу.",
                attention: [
                    "Спина нейтральна.",
                    "Штанга близко к ногам.",
                    "Движение начинается ногами и тазом."
                ],
                mistakes: [
                    "Округление спины.",
                    "Рывок.",
                    "Штанга далеко от тела."
                ],
                tip: "Сначала идеально освой технику, потом увеличивай вес."
            },
            {
                name: "Тяга верхнего блока",
                muscle: "Спина",
                sets: 3,
                reps: "8–12",
                rest: 90,
                technique: "Тяни рукоять вниз к верхней части груди, сохраняя стабильный корпус.",
                attention: [
                    "Не раскачивайся.",
                    "Плечи вниз.",
                    "Контролируй возврат."
                ],
                mistakes: [
                    "Рывки.",
                    "Сильное отклонение назад.",
                    "Работа только руками."
                ],
                tip: "Представь, что локти движутся вниз."
            },
            {
                name: "Присед в машине Смита",
                muscle: "Ноги",
                sets: 3,
                reps: "8–12",
                rest: 90,
                technique: "Выполняй присед в контролируемой амплитуде, сохраняя устойчивое положение стоп и коленей.",
                attention: [
                    "Колени направлены по линии стоп.",
                    "Не заваливайся внутрь.",
                    "Контролируй глубину."
                ],
                mistakes: [
                    "Слишком глубокий присед.",
                    "Завал коленей.",
                    "Слишком большой вес."
                ],
                tip: "Глубина должна быть комфортной и без боли."
            },
            {
                name: "Жим гантелей сидя",
                muscle: "Плечи",
                sets: 3,
                reps: "10–12",
                rest: 90,
                technique: "Сиди устойчиво и выжимай гантели вверх без сильного прогиба.",
                attention: [
                    "Не прогибай поясницу.",
                    "Контролируй опускание.",
                    "Не используй инерцию."
                ],
                mistakes: [
                    "Сильный прогиб.",
                    "Рывки.",
                    "Слишком большой вес."
                ],
                tip: "Держи движение плавным."
            },
            {
                name: "Сгибания на скамье Скотта",
                muscle: "Бицепс",
                sets: 3,
                reps: "10–12",
                rest: 90,
                technique: "Работай бицепсом без отрыва плеч от подушки.",
                attention: [
                    "Локти стабильны.",
                    "Контролируй негатив.",
                    "Не раскачивай корпус."
                ],
                mistakes: [
                    "Рывки.",
                    "Слишком большой вес.",
                    "Отрыв плеч."
                ],
                tip: "Медленно опускай вес."
            },
            {
                name: "Разгибания рук с канатом",
                muscle: "Трицепс",
                sets: 3,
                reps: "10–12",
                rest: 90,
                technique: "Разгибай руки вниз, удерживая локти возле корпуса.",
                attention: [
                    "Локти стабильны.",
                    "Не раскачивай корпус.",
                    "Полностью сокращай трицепс."
                ],
                mistakes: [
                    "Работа плечами.",
                    "Рывки.",
                    "Слишком большой вес."
                ],
                tip: "В нижней точке слегка разведи канат."
            }
        ]
    }
};


// ============================================================
// ГЛАВНЫЙ ЭКРАН
// ============================================================

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
            openPool();
        }

        if (index === 4) {
            alert("Дни отдыха");
        }

    });

});


// ============================================================
// LOCAL STORAGE
// ============================================================

function getExerciseKey(workoutId, exerciseIndex) {

    return `exercise_${workoutId}_${exerciseIndex}`;

}


function getExerciseData(workoutId, exerciseIndex) {

    const key =
        getExerciseKey(
            workoutId,
            exerciseIndex
        );

    const saved =
        localStorage.getItem(key);


    if (!saved) {

        return {
            sets: []
        };

    }


    try {

        return JSON.parse(saved);

    } catch (error) {

        return {
            sets: []
        };

    }

}


// ============================================================
// СОХРАНЕНИЕ ПОДХОДА
// ============================================================

function saveSet(
    workoutId,
    exerciseIndex,
    setIndex,
    weight,
    reps
) {

    const data =
        getExerciseData(
            workoutId,
            exerciseIndex
        );


    if (!data.sets) {
        data.sets = [];
    }


    data.sets[setIndex] = {

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


// ============================================================
// СОХРАНЕНИЕ ВВОДА СРАЗУ ПРИ ИЗМЕНЕНИИ
// ============================================================

function saveInputValue(
    workoutId,
    exerciseIndex,
    setIndex
) {

    const weightInput =
        document.getElementById(
            `weight_${setIndex}`
        );


    const repsInput =
        document.getElementById(
            `reps_${setIndex}`
        );


    if (!weightInput || !repsInput) {
        return;
    }


    saveSet(

        workoutId,

        exerciseIndex,

        setIndex,

        weightInput.value,

        repsInput.value

    );

}


// ============================================================
// ИСТОРИЯ ТРЕНИРОВОК
// ============================================================

function getWorkoutHistory() {

    const saved =
        localStorage.getItem(
            "workoutHistory"
        );


    if (!saved) {
        return [];
    }


    try {

        return JSON.parse(saved);

    } catch (error) {

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


    const record = {

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


            record.exercises.push({

                name: exercise.name,

                muscle: exercise.muscle,

                sets: data.sets || []

            });

        }
    );


    history.unshift(record);


    localStorage.setItem(

        "workoutHistory",

        JSON.stringify(history)

    );

}


// ============================================================
// ФОРМАТ ДАТЫ
// ============================================================

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


// ============================================================
// ОТКРЫТИЕ ТРЕНИРОВКИ
// ============================================================

function openWorkout(workoutId) {

    const workout =
        workouts[workoutId];


    if (!workout) {
        return;
    }


    document.body.innerHTML = `

        <div class="app">

            <header class="header">

                <button
                    id="backButton"
                    style="
                        background:none;
                        border:none;
                        font-size:18px;
                        font-weight:600;
                        cursor:pointer;
                        padding:0;
                        margin-right:12px;
                    "
                >
                    ← Назад
                </button>


                <div>

                    <h1>
                        ${workout.title}
                    </h1>

                    <p>
                        ${workout.subtitle}
                    </p>

                </div>

            </header>


            <main>

                <div
                    id="workoutProgress"
                    style="
                        margin-bottom:20px;
                        font-size:15px;
                        color:#777;
                    "
                ></div>


                <section
                    id="exerciseList"
                    class="workout-list"
                ></section>


                <button
                    id="historyButton"
                    style="
                        width:100%;
                        padding:16px;
                        margin-top:20px;
                        border:none;
                        border-radius:14px;
                        background:#eeeeee;
                        font-size:16px;
                        font-weight:600;
                        cursor:pointer;
                    "
                >
                    История тренировок
                </button>

            </main>

        </div>

    `;


    document
        .getElementById("backButton")
        .addEventListener(
            "click",
            () => {
                location.reload();
            }
        );


    document
        .getElementById("historyButton")
        .addEventListener(
            "click",
            () => {
                showWorkoutHistory();
            }
        );


    renderExerciseList(workoutId);

}


// ============================================================
// СПИСОК УПРАЖНЕНИЙ
// ============================================================

function renderExerciseList(workoutId) {

    const workout =
        workouts[workoutId];


    const list =
        document.getElementById(
            "exerciseList"
        );


    if (!list) {
        return;
    }


    let completedExercises = 0;


    workout.exercises.forEach(
        (exercise, index) => {

            const data =
                getExerciseData(
                    workoutId,
                    index
                );


            const completedSets =
                data.sets
                    ? data.sets.filter(
                        set =>
                            set &&
                            set.reps !== undefined &&
                            set.reps !== ""
                    ).length
                    : 0;


            if (
                completedSets >=
                exercise.sets
            ) {

                completedExercises++;

            }


            const card =
                document.createElement(
                    "button"
                );


            card.className =
                "workout-card";


            card.style.textAlign =
                "left";


            card.style.width =
                "100%";


            card.innerHTML = `

                <div class="workout-icon">

                    ${
                        completedSets >=
                        exercise.sets
                            ? "✅"
                            : "🏋️"
                    }

                </div>


                <div class="workout-info">

                    <h2>
                        ${exercise.name}
                    </h2>


                    <p>

                        ${exercise.muscle}

                        ·

                        ${exercise.sets}

                        ×

                        ${exercise.reps}

                    </p>


                    <p
                        style="
                            margin-top:5px;
                            font-size:13px;
                            color:#888;
                        "
                    >

                        ${
                            completedSets >= exercise.sets
                                ? "Выполнено ✓"
                                : `Выполнено: ${completedSets}/${exercise.sets}`
                        }

                    </p>

                </div>


                <div class="arrow">
                    ›
                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    startExercise(
                        workoutId,
                        index
                    );

                }
            );


            list.appendChild(card);

        }
    );


    const progress =
        document.getElementById(
            "workoutProgress"
        );


    if (progress) {

        progress.innerHTML = `

            Выполнено упражнений:

            <strong>
                ${completedExercises}/${workout.exercises.length}
            </strong>

        `;

    }

}


// ============================================================
// УПРАЖНЕНИЕ
// ============================================================

function startExercise(
    workoutId,
    exerciseIndex
) {

    const workout =
        workouts[workoutId];


    const exercise =
        workout.exercises[
            exerciseIndex
        ];


    const data =
        getExerciseData(
            workoutId,
            exerciseIndex
        );


    document.body.innerHTML = `

        <div class="app">

            <header class="header">

                <button
                    id="backButton"
                    style="
                        background:none;
                        border:none;
                        font-size:18px;
                        font-weight:600;
                        cursor:pointer;
                        padding:0;
                        margin-right:12px;
                    "
                >
                    ← Назад
                </button>


                <div>

                    <h1>
                        ${exercise.name}
                    </h1>

                    <p>
                        ${exercise.muscle}
                    </p>

                </div>

            </header>


            <main>

                <section
                    style="
                        background:#f5f5f5;
                        padding:18px;
                        border-radius:16px;
                        margin-bottom:20px;
                    "
                >

                    <h2
                        style="
                            margin-top:0;
                        "
                    >
                        Техника
                    </h2>


                    <p>
                        ${exercise.technique}
                    </p>


                    <h3>
                        На что обратить внимание
                    </h3>


                    <ul>

                        ${exercise.attention
                            .map(
                                item =>
                                    `<li>${item}</li>`
                            )
                            .join("")
                        }

                    </ul>


                    <h3>
                        Частые ошибки
                    </h3>


                    <ul>

                        ${exercise.mistakes
                            .map(
                                item =>
                                    `<li>${item}</li>`
                            )
                            .join("")
                        }

                    </ul>


                    <p>

                        <strong>
                            Совет:
                        </strong>

                        ${exercise.tip}

                    </p>

                </section>


                <section>

                    <h2>
                        Подходы
                    </h2>


                    <p
                        style="
                            color:#888;
                            font-size:13px;
                            margin-top:-8px;
                            margin-bottom:15px;
                        "
                    >
                        Вес и повторы сохраняются автоматически
                    </p>


                    <div
                        id="setsContainer"
                    ></div>

                </section>


                <div
                    id="exerciseNavigation"
                ></div>

            </main>

        </div>

    `;


    document
        .getElementById("backButton")
        .addEventListener(
            "click",
            () => {

                openWorkout(
                    workoutId
                );

            }
        );


    renderSets(
        workoutId,
        exerciseIndex,
        exercise,
        data
    );


    renderExerciseNavigation(
        workoutId,
        exerciseIndex,
        exercise
    );

}


// ============================================================
// НАВИГАЦИЯ ПОСЛЕ ЗАВЕРШЕНИЯ УПРАЖНЕНИЯ
// ============================================================

function renderExerciseNavigation(
    workoutId,
    exerciseIndex,
    exercise
) {

    const container =
        document.getElementById(
            "exerciseNavigation"
        );


    if (!container) {
        return;
    }


    const data =
        getExerciseData(
            workoutId,
            exerciseIndex
        );


    const completedSets =
        data.sets
            ? data.sets.filter(
                set =>
                    set &&
                    set.reps !== undefined &&
                    set.reps !== ""
            ).length
            : 0;


    // Пока не выполнены все подходы —
    // кнопка следующего упражнения скрыта
    if (
        completedSets <
        exercise.sets
    ) {

        container.innerHTML = "";

        return;

    }


    const isLastExercise =
        exerciseIndex + 1 >=
        workouts[workoutId]
            .exercises.length;


    container.innerHTML = `

        <div
            style="
                background:#f0f0f0;
                padding:14px;
                border-radius:14px;
                margin-top:20px;
                text-align:center;
                font-size:15px;
                font-weight:600;
            "
        >
            ✅ Все подходы выполнены
        </div>


        <button
            id="nextExerciseButton"
            style="
                width:100%;
                padding:16px;
                margin-top:12px;
                border:none;
                border-radius:14px;
                background:#000;
                color:#fff;
                font-size:16px;
                font-weight:600;
                cursor:pointer;
            "
        >
            ${
                isLastExercise
                    ? "Завершить тренировку ✓"
                    : "Следующее упражнение →"
            }
        </button>

    `;


    document
        .getElementById(
            "nextExerciseButton"
        )
        .addEventListener(
            "click",
            () => {

                // Последнее упражнение
                if (isLastExercise) {

                    saveWorkoutToHistory(
                        workoutId
                    );


                    alert(
                        "Тренировка завершена 💪"
                    );


                    openWorkout(
                        workoutId
                    );


                    return;

                }


                // Следующее упражнение
                startExercise(
                    workoutId,
                    exerciseIndex + 1
                );

            }
        );

}


// ============================================================
// ПОДХОДЫ
// ============================================================

function renderSets(
    workoutId,
    exerciseIndex,
    exercise,
    data
) {

    const container =
        document.getElementById(
            "setsContainer"
        );


    if (!container) {
        return;
    }


    for (
        let setIndex = 0;
        setIndex < exercise.sets;
        setIndex++
    ) {

        const savedSet =
            data.sets &&
            data.sets[setIndex]
                ? data.sets[setIndex]
                : {
                    weight: "",
                    reps: ""
                };


        const setBlock =
            document.createElement(
                "div"
            );


        setBlock.style.cssText = `

            background:#f5f5f5;

            border-radius:16px;

            padding:16px;

            margin-bottom:12px;

        `;


        setBlock.innerHTML = `

            <div
                style="
                    font-weight:600;
                    margin-bottom:12px;
                "
            >

                Подход
                ${setIndex + 1}

            </div>


            <div
                style="
                    display:flex;
                    gap:10px;
                "
            >

                <input
                    id="weight_${setIndex}"
                    type="number"
                    inputmode="decimal"
                    placeholder="Вес, кг"
                    value="${savedSet.weight || ""}"
                    style="
                        flex:1;
                        padding:12px;
                        border:1px solid #ddd;
                        border-radius:10px;
                        font-size:16px;
                    "
                >


                <input
                    id="reps_${setIndex}"
                    type="number"
                    inputmode="numeric"
                    placeholder="Повторы"
                    value="${savedSet.reps || ""}"
                    style="
                        flex:1;
                        padding:12px;
                        border:1px solid #ddd;
                        border-radius:10px;
                        font-size:16px;
                    "
                >

            </div>


            <button
                id="complete_${setIndex}"
                style="
                    width:100%;
                    padding:12px;
                    margin-top:12px;
                    border:none;
                    border-radius:10px;
                    background:${savedSet.reps ? "#dddddd" : "#000"};
                    color:${savedSet.reps ? "#000" : "#fff"};
                    font-size:15px;
                    font-weight:600;
                    cursor:pointer;
                "
            >

                ${
                    savedSet.reps
                        ? "Подход выполнен ✓"
                        : "Выполнить подход"
                }

            </button>

        `;


        container.appendChild(
            setBlock
        );


        // ====================================================
        // АВТОСОХРАНЕНИЕ
        // ====================================================

        const weightInput =
            document.getElementById(
                `weight_${setIndex}`
            );


        const repsInput =
            document.getElementById(
                `reps_${setIndex}`
            );


        weightInput.addEventListener(
            "input",
            () => {

                saveInputValue(
                    workoutId,
                    exerciseIndex,
                    setIndex
                );

            }
        );


        repsInput.addEventListener(
            "input",
            () => {

                saveInputValue(
                    workoutId,
                    exerciseIndex,
                    setIndex
                );

            }
        );


        document
            .getElementById(
                `complete_${setIndex}`
            )
            .addEventListener(
                "click",
                () => {

                    completeSet(
                        workoutId,
                        exerciseIndex,
                        setIndex,
                        exercise
                    );

                }
            );

    }

}


// ============================================================
// ЗАВЕРШЕНИЕ ПОДХОДА
// ============================================================

function completeSet(
    workoutId,
    exerciseIndex,
    setIndex,
    exercise
) {

    const weightInput =
        document.getElementById(
            `weight_${setIndex}`
        );


    const repsInput =
        document.getElementById(
            `reps_${setIndex}`
        );


    const weight =
        weightInput
            ? weightInput.value
            : "";


    const reps =
        repsInput
            ? repsInput.value
            : "";


    if (!reps) {

        alert(
            "Укажи количество повторений."
        );

        return;
    }


    // Сохраняем подход
    saveSet(
        workoutId,
        exerciseIndex,
        setIndex,
        weight,
        reps
    );


    // После выполнения подхода запускаем отдых.
    // После отдыха остаёмся в ЭТОМ ЖЕ упражнении.
    showRestTimer(
        exercise.rest,
        () => {

            startExercise(
                workoutId,
                exerciseIndex
            );

        }
    );

}


// ============================================================
// ТАЙМЕР ОТДЫХА
// ============================================================

function showRestTimer(
    seconds,
    callback
) {

    let remaining =
        seconds;


    const overlay =
        document.createElement(
            "div"
        );


    overlay.id =
        "restTimerOverlay";


    overlay.style.cssText = `

        position:fixed;

        inset:0;

        background:rgba(0,0,0,0.92);

        color:white;

        display:flex;

        flex-direction:column;

        align-items:center;

        justify-content:center;

        z-index:9999;

        text-align:center;

        padding:20px;

    `;


    overlay.innerHTML = `

        <div
            style="
                font-size:18px;
                margin-bottom:15px;
            "
        >
            Отдых
        </div>


        <div
            id="restTimerValue"
            style="
                font-size:72px;
                font-weight:700;
            "
        >
            ${remaining}
        </div>


        <button
            id="skipRestButton"
            style="
                margin-top:30px;
                padding:14px 25px;
                border:none;
                border-radius:12px;
                font-size:16px;
                cursor:pointer;
            "
        >
            Пропустить
        </button>

    `;


    document.body.appendChild(
        overlay
    );


    const timerValue =
        document.getElementById(
            "restTimerValue"
        );


    const skipButton =
        document.getElementById(
            "skipRestButton"
        );


    let finished = false;


    function finish() {

        if (finished) {
            return;
        }


        finished = true;


        clearInterval(timer);


        overlay.remove();


        callback();

    }


    skipButton.addEventListener(
        "click",
        finish
    );


    const timer =
        setInterval(
            () => {

                remaining--;


                timerValue.textContent =
                    remaining;


                if (
                    remaining <= 0
                ) {

                    clearInterval(
                        timer
                    );


                    try {

                        restSound.currentTime =
                            0;

                        restSound.play();

                    } catch (error) {

                        console.log(
                            error
                        );

                    }


                    setTimeout(
                        () => {
                            finish();
                        },
                        500
                    );

                }

            },
            1000
        );

}


// ============================================================
// БАССЕЙН
// ============================================================

function openPool() {

    // Загружаем последние настройки бассейна
    const savedPoolSettings =
        JSON.parse(
            localStorage.getItem(
                "poolSettings"
            ) || "{}"
        );


    const savedLanes =
        savedPoolSettings.lanes ||
        "";


    const savedLaneLength =
        savedPoolSettings.laneLength ||
        25;


    const savedTime =
        savedPoolSettings.time ||
        "";


    document.body.innerHTML = `

        <div class="app">

            <header class="header">

                <button
                    id="backButton"
                    style="
                        background:none;
                        border:none;
                        font-size:18px;
                        font-weight:600;
                        cursor:pointer;
                        padding:0;
                        margin-right:12px;
                    "
                >
                    ← Назад
                </button>


                <div>

                    <h1>
                        День 6
                    </h1>

                    <p>
                        Бассейн
                    </p>

                </div>

            </header>


            <main>

                <section
                    style="
                        background:#f5f5f5;
                        padding:18px;
                        border-radius:16px;
                        margin-bottom:20px;
                    "
                >

                    <h2
                        style="
                            margin-top:0;
                        "
                    >
                        Тренировка в бассейне
                    </h2>


                    <label
                        style="
                            display:block;
                            margin-bottom:8px;
                            font-weight:600;
                        "
                    >
                        Количество дорожек
                    </label>


                    <input
                        id="poolLanesInput"
                        type="number"
                        min="1"
                        step="1"
                        inputmode="numeric"
                        placeholder="Например, 20"
                        value="${savedLanes}"
                        style="
                            width:100%;
                            box-sizing:border-box;
                            padding:14px;
                            border:1px solid #ddd;
                            border-radius:12px;
                            font-size:17px;
                            margin-bottom:18px;
                        "
                    >


                    <label
                        style="
                            display:block;
                            margin-bottom:8px;
                            font-weight:600;
                        "
                    >
                        Длина дорожки, м
                    </label>


                    <input
                        id="poolLengthInput"
                        type="number"
                        min="1"
                        step="1"
                        inputmode="numeric"
                        placeholder="Например, 25"
                        value="${savedLaneLength}"
                        style="
                            width:100%;
                            box-sizing:border-box;
                            padding:14px;
                            border:1px solid #ddd;
                            border-radius:12px;
                            font-size:17px;
                            margin-bottom:18px;
                        "
                    >


                    <label
                        style="
                            display:block;
                            margin-bottom:8px;
                            font-weight:600;
                        "
                    >
                        Время, минут
                    </label>


                    <input
                        id="poolTimeInput"
                        type="number"
                        min="1"
                        step="1"
                        inputmode="numeric"
                        placeholder="Например, 45"
                        value="${savedTime}"
                        style="
                            width:100%;
                            box-sizing:border-box;
                            padding:14px;
                            border:1px solid #ddd;
                            border-radius:12px;
                            font-size:17px;
                            margin-bottom:20px;
                        "
                    >


                    <div
                        id="poolDistancePreview"
                        style="
                            padding:14px;
                            background:white;
                            border-radius:12px;
                            margin-bottom:18px;
                            color:#555;
                        "
                    >
                        Дистанция: —
                    </div>


                    <button
                        id="savePoolButton"
                        style="
                            width:100%;
                            padding:16px;
                            border:none;
                            border-radius:14px;
                            background:#000;
                            color:#fff;
                            font-size:16px;
                            font-weight:600;
                            cursor:pointer;
                        "
                    >
                        Сохранить тренировку
                    </button>

                </section>


                <button
                    id="poolHistoryButton"
                    style="
                        width:100%;
                        padding:16px;
                        border:none;
                        border-radius:14px;
                        background:#eeeeee;
                        font-size:16px;
                        font-weight:600;
                        cursor:pointer;
                    "
                >
                    История тренировок
                </button>

            </main>

        </div>

    `;


    document
        .getElementById("backButton")
        .addEventListener(
            "click",
            () => {

                location.reload();

            }
        );


    const lanesInput =
        document.getElementById(
            "poolLanesInput"
        );


    const lengthInput =
        document.getElementById(
            "poolLengthInput"
        );


    const timeInput =
        document.getElementById(
            "poolTimeInput"
        );


    const distancePreview =
        document.getElementById(
            "poolDistancePreview"
        );


    // ========================================================
    // СОХРАНЕНИЕ НАСТРОЕК БАССЕЙНА
    // ========================================================

    function savePoolSettings() {

        const settings = {

            lanes:
                lanesInput.value,

            laneLength:
                lengthInput.value,

            time:
                timeInput.value

        };


        localStorage.setItem(

            "poolSettings",

            JSON.stringify(
                settings
            )

        );

    }


    // ========================================================
    // РАСЧЁТ ДИСТАНЦИИ
    // ========================================================

    function updatePoolDistance() {

        savePoolSettings();


        const lanes =
            Number(
                lanesInput.value
            );


        const length =
            Number(
                lengthInput.value
            );


        if (
            lanes > 0 &&
            length > 0
        ) {

            const distance =
                lanes * length;


            distancePreview.innerHTML = `

                Дистанция:

                <strong>
                    ${distance} м
                </strong>

            `;

        } else {

            distancePreview.textContent =
                "Дистанция: —";

        }

    }


    lanesInput.addEventListener(
        "input",
        updatePoolDistance
    );


    lengthInput.addEventListener(
        "input",
        updatePoolDistance
    );


    timeInput.addEventListener(
        "input",
        savePoolSettings
    );


    // Сразу показываем сохранённую дистанцию
    updatePoolDistance();


    document
        .getElementById(
            "savePoolButton"
        )
        .addEventListener(
            "click",
            () => {

                savePoolWorkout();

            }
        );


    document
        .getElementById(
            "poolHistoryButton"
        )
        .addEventListener(
            "click",
            () => {

                showWorkoutHistory();

            }
        );

}


// ============================================================
// СОХРАНЕНИЕ БАССЕЙНА
// ============================================================

function savePoolWorkout() {

    const lanesInput =
        document.getElementById(
            "poolLanesInput"
        );


    const lengthInput =
        document.getElementById(
            "poolLengthInput"
        );


    const timeInput =
        document.getElementById(
            "poolTimeInput"
        );


    const lanes =
        Number(
            lanesInput.value
        );


    const laneLength =
        Number(
            lengthInput.value
        );


    const time =
        Number(
            timeInput.value
        );


    if (
        !lanes ||
        lanes <= 0
    ) {

        alert(
            "Укажи количество дорожек."
        );

        return;
    }


    if (
        !laneLength ||
        laneLength <= 0
    ) {

        alert(
            "Укажи длину дорожки."
        );

        return;
    }


    if (
        !time ||
        time <= 0
    ) {

        alert(
            "Укажи время плавания."
        );

        return;
    }


    // Сохраняем последние настройки
    localStorage.setItem(
        "poolSettings",
        JSON.stringify({

            lanes: lanes,

            laneLength: laneLength,

            time: time

        })
    );


    const distance =
        lanes * laneLength;


    const history =
        getWorkoutHistory();


    const record = {

        id: Date.now(),

        workoutId: "pool",

        title: "День 6",

        subtitle: "Бассейн",

        date:
            new Date().toISOString(),

        pool: {

            lanes: lanes,

            laneLength: laneLength,

            time: time,

            distance: distance

        },

        exercises: []

    };


    history.unshift(record);


    localStorage.setItem(

        "workoutHistory",

        JSON.stringify(history)

    );


    alert(

        `Тренировка сохранена!\n\n` +

        `${lanes} дорожек × ` +

        `${laneLength} м = ` +

        `${distance} м\n` +

        `Время: ${time} мин`

    );


    openPool();

}


// ============================================================
// ИСТОРИЯ
// ============================================================

function showWorkoutHistory() {

    const history =
        getWorkoutHistory();


    document.body.innerHTML = `

        <div class="app">

            <header class="header">

                <button
                    id="backButton"
                    style="
                        background:none;
                        border:none;
                        font-size:18px;
                        font-weight:600;
                        cursor:pointer;
                        padding:0;
                        margin-right:12px;
                    "
                >
                    ← Назад
                </button>


                <div>

                    <h1>
                        История
                    </h1>

                    <p>
                        Твои тренировки
                    </p>

                </div>

            </header>


            <main>

                <section
                    id="historyList"
                    class="workout-list"
                ></section>

            </main>

        </div>

    `;


    document
        .getElementById(
            "backButton"
        )
        .addEventListener(
            "click",
            () => {

                location.reload();

            }
        );


    const list =
        document.getElementById(
            "historyList"
        );


    if (!history.length) {

        list.innerHTML = `

            <div
                style="
                    text-align:center;
                    padding:40px 20px;
                    color:#777;
                "
            >
                История пока пустая.
            </div>

        `;

        return;

    }


    history.forEach(
        record => {

            const card =
                document.createElement(
                    "div"
                );


            card.style.cssText = `

                background:#f5f5f5;

                border-radius:16px;

                padding:18px;

                margin-bottom:14px;

            `;


            // =================================================
            // БАССЕЙН
            // =================================================

            if (
                record.workoutId === "pool" &&
                record.pool
            ) {

                const pool =
                    record.pool;


                card.innerHTML = `

                    <div
                        style="
                            display:flex;
                            align-items:center;
                            gap:12px;
                            margin-bottom:12px;
                        "
                    >

                        <div
                            style="
                                font-size:30px;
                            "
                        >
                            🏊
                        </div>


                        <div>

                            <div
                                style="
                                    font-weight:700;
                                    font-size:18px;
                                "
                            >
                                Бассейн
                            </div>


                            <div
                                style="
                                    color:#777;
                                    font-size:13px;
                                    margin-top:3px;
                                "
                            >

                                ${formatHistoryDate(
                                    record.date
                                )}

                                ·

                                ${formatHistoryTime(
                                    record.date
                                )}

                            </div>

                        </div>

                    </div>


                    <div
                        style="
                            font-size:16px;
                            line-height:1.7;
                        "
                    >

                        <div>

                            🏊

                            <strong>
                                ${pool.lanes}
                            </strong>

                            дорожек

                        </div>


                        <div>

                            📏

                            <strong>
                                ${pool.laneLength} м
                            </strong>

                            длина дорожки

                        </div>


                        <div>

                            🗺️

                            <strong>
                                ${pool.distance} м
                            </strong>

                            общая дистанция

                        </div>


                        <div>

                            ⏱

                            <strong>
                                ${pool.time} мин
                            </strong>

                        </div>

                    </div>

                `;


                list.appendChild(
                    card
                );


                return;

            }


            // =================================================
            // ОБЫЧНАЯ ТРЕНИРОВКА
            // =================================================

            card.innerHTML = `

                <div
                    style="
                        margin-bottom:15px;
                    "
                >

                    <div
                        style="
                            font-weight:700;
                            font-size:18px;
                        "
                    >
                        ${record.title}
                    </div>


                    <div
                        style="
                            color:#777;
                            margin-top:4px;
                            font-size:14px;
                        "
                    >
                        ${record.subtitle}
                    </div>


                    <div
                        style="
                            color:#999;
                            margin-top:4px;
                            font-size:13px;
                        "
                    >

                        ${formatHistoryDate(
                            record.date
                        )}

                        ·

                        ${formatHistoryTime(
                            record.date
                        )}

                    </div>

                </div>


                <div>

                    ${
                        record.exercises
                            .map(
                                exercise => {

                                    const completedSets =
                                        exercise.sets
                                            ? exercise.sets.filter(
                                                set =>
                                                    set &&
                                                    set.reps !== undefined &&
                                                    set.reps !== ""
                                            )
                                            : [];


                                    if (
                                        !completedSets.length
                                    ) {

                                        return "";

                                    }


                                    return `

                                        <div
                                            style="
                                                padding:10px 0;
                                                border-top:1px solid #ddd;
                                            "
                                        >

                                            <div
                                                style="
                                                    font-weight:600;
                                                    margin-bottom:5px;
                                                "
                                            >

                                                ${exercise.name}

                                            </div>


                                            <div
                                                style="
                                                    color:#666;
                                                    font-size:14px;
                                                    line-height:1.6;
                                                "
                                            >

                                                ${
                                                    completedSets
                                                        .map(
                                                            (
                                                                set,
                                                                index
                                                            ) =>
                                                                `Подход ${index + 1}: ${set.weight || "—"} кг × ${set.reps}`
                                                        )
                                                        .join(
                                                            "<br>"
                                                        )
                                                }

                                            </div>

                                        </div>

                                    `;

                                }
                            )
                            .join("")
                    }

                </div>

            `;


            list.appendChild(
                card
            );

        }
    );

}


// ============================================================
// ПРЕСС
// ============================================================

function startAbs() {

    alert(

        "Упражнения на пресс добавим следующим шагом:\n\n" +

        "• Планка\n" +

        "• Скручивания\n" +

        "• Dead Bug\n" +

        "• Pallof Press"

    );

}