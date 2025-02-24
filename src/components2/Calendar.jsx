// import FullCalendar from "@fullcalendar/react";
// import timeGridPlugin from '@fullcalendar/timegrid'
// import dayGridPlugin from "@fullcalendar/daygrid"
// import interactionPlugin from "@fullcalendar/interaction"
// import { Calendar } from "@fullcalendar/core/index.js";
// import React, { useRef } from 'react'

//         <FullCalendar
//             locale='ja'　// 言語を日本語に設定
//             allDayText="終日" // 「終日」の表示用テキスト
//             height="auto" // ヘッダーとフッターを含むカレンダー全体の高さを設定する
//             plugins={[timeGridPlugin,dayGridPlugin,interactionPlugin]}// プラグインを読み込む
//             initialView="dayGridMonth"// カレンダーが読み込まれたときの初期ビュー
//             slotDuration="00:30:00" // タイムスロットを表示する頻度。
//             //ユーザーはクリックしてドラッグすることで、複数の日付または時間帯を強調表示できます。
//             //ユーザーがクリックやドラッグで選択できるようにするには、インタラクション・プラグインをロードし、このオプションをtrueに設定する必要があります。
//             selectable={true}
//             businessHours={{
//                 daysOfWeek:[1,2,3,4,5],
//                 startTime:"00:00",
//                 endTime:"24:00"
//             }}// カレンダーの特定の時間帯を強調します。 デフォルトでは、月曜日から金曜日の午前9時から午後5時までです。
//             weekends={true}// カレンダービューに土曜日/日曜日の列を含めるかどうか。
//             titleFormat={{
//                 year:"numeric",
//                 month:"short"
//             }}
//             headerToolbar={{
//                 start:"title",
//                 center:"prev,next,today",
//                 end:"dayGridMonth,timeGridWeek"
//             }}// headerToolbarのタイトルに表示されるテキストを決定します。
//             ref={ref}
//             eventClick={handleClick}//ユーザーがイベントをクリックしたときにトリガーされます。
//             select={handleSelect}//日時が選択されるとトリガーされる
//         />

// export default Calendar;

import React, { useRef } from 'react';
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calender.css"

const MyCalendar = () => {
    // useRef を正しく定義
    const calendarRef = useRef(null);

    // イベントクリック時の処理
    const handleClick = (info) => {
        alert(`イベント: ${info.event.title}`);
    };

    // 日時選択時の処理
    const handleSelect = (info) => {
        alert("予定を入れる");
    };

    return (
        <div className='calendar-container'>
            <FullCalendar
            ref={calendarRef}
            locale="ja" // 言語を日本語に設定
            allDayText="終日" // 「終日」の表示用テキスト
            height="auto" // カレンダー全体の高さを設定
            plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]} // プラグインを読み込む
            initialView="dayGridMonth" // 初期ビュー
            slotDuration="00:30:00" // タイムスロットの表示頻度
            selectable={true} // 日時の選択を可能にする
            businessHours={{
                daysOfWeek: [1, 2, 3, 4, 5],
                startTime: "00:00",
                endTime: "24:00"
            }} // 営業時間の設定
            weekends={true} // 土日を表示
            titleFormat={{
                year: "numeric",
                month: "short"
            }} // タイトルのフォーマット
            headerToolbar={{
                start: "title",
                center: "prev,next today",
                end: "dayGridMonth,timeGridWeek"
            }} // ヘッダーツールバー
            eventClick={handleClick} // イベントクリック時
            select={handleSelect} // 日時選択時
            
        />
        </div>

    );
};

export default MyCalendar;
