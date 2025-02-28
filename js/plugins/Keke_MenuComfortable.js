//=============================================================================
// Keke_MenuComfortable - メニュー快適化
// バージョン: 1.2.4
//=============================================================================
// Copyright (c) 2023 ケケー
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @target MZ
 * @plugindesc メニューを快適化する
 * @author ケケー
 * @url https://kekeelabo.com
 * 
 * @help
 * 【ver.1.2.4】
 * メニューに様々な機能を追加し快適化にする
 * 不要な機能は個別に無効化可能
 * 
 * ◆【機能一覧】
 * 快適性アップの上で、特に効果の大きい機能は(★重要)マークを付けている
 * (★条件付き重要)は特定の条件下では効果大ということ
 * 
 * ■スクロールバー
 * 
 * ●スクロールバー(★重要)
 * 縦に長いウインドウの場合、現在のスクロール位置を示すバーを表示する
 * 単に示すだけでなく、バーをタッチorマウスで直接掴んで動かすことができる
 * 明け透けに言うとブラウザのスクロールバーと全く同じ仕様
 * 慣れ親しんだものと同じであるがゆえにストレスなく使えると思う
 * 
 * 
 * ■一覧モード
 * 
 * ●一覧モード(★条件付き重要)
 * メニューメイン画面のパーティステータスを、
 * 「大人数を一覧できるウインドウ」に切り替えられる
 * これを一覧モードと呼ぶ。一画面に表示できる人数は自由に調整可能
 * 切り替えはキー操作の場合「シフトキー」
 * タッチ操作の場合は「画面中央での左右スワイプ」で行う
 * 実はこれは上に『スワイプスライド』と全く同じで、
 * 「画面中央での左右スワイプ」操作をすると、
 * スキル/装備/ステータス画面等では「キャラ切り替え」が、
 * メニューメイン画面では「一覧モードとの切り替え」が行えるということ
 * 仲間の数が少ない場合は必要ないかもしれないが、
 * 多い場合はあるとないとでは全然違う便利な機能だ
 * 
 * 
 * ■操作全般
 * 
 * ●並べ替えドラッグ&ドロップ(★条件付き重要)
 * 並べ替えを「決定で対象を掴み、移動させていく」方式にする
 * (デフォルトは入れ替え方式(決定で対象を掴み、次に決定した対象と入れ替える))
 * 仲間の数が少ない場合はさほど必要でないかもしれないが、
 * 多い場合は格段に快適な並べ替えができるようになる
 * 
 * ●キャラ切り替え拡張(★重要)
 * スキル画面、装備画面、ステータス画面等で、
 * 左右キー/マウスホイールでもキャラ切り替えをできるようにする
 * (デフォルトはQWキーのみ)
 * 
 * 
 * ■キー操作
 * 
 * ●リスト縦ループ強化
 * アイテムリストのような、
 * 横に二列以上並んでるリストでも縦ループできるようにする
 * (デフォルトは1列のリストのみループ)
 * 
 * ●リスト横ループ強化
 * アイテムリストのような、
 * 縦に二行以上あるリストでも最初と最後がループするようにする
 * (デフォルトは1行のリストのみ)
 * 
 * ●リスト左右キーでジャンプ
 * メニューメイン画面のパーティステータスのような
 * 横1列で縦に長く伸びるリストの場合、
 * 左右キーで一気にカーソル移動できるようにする
 * (デフォルトはQWキーのみ)
 * 
 * ※『キャラ切り替え拡張』と『リスト左右ジャンプ』の共通点は、
 * QWキーの機能を左右キーにも割り当てるということである
 * 左右キーの方が押しやすい以上そちらでもできるようにした方がいいので
 * 
 * 
 * ■タッチ操作
 * 
 * ●シングルタッチで決定(★重要)
 * タッチ一回で決定できるようにする
 * (デフォルトはタッチでカーソルを合わせ、
 * 決定するにはさらにもう1回タッチする必要がある)
 * この場合カーソルを合わせられない=ヘルプを表示できないのだが、
 * その問題は次の『ロングタッチセレクト』で解消する
 * 
 * ●ロングタッチセレクト(★重要)
 * ロングタッチでカーソルを合わせる
 * これは上の「シングルタッチで決定」の問題点を解消するためのもの
 * 決定したい場合は「タッチしてすぐ放す」、
 * カーソルを合わせたい場合は「ロングタッチ」することになる
 * 
 * ●ダイレクトタッチ(★重要)
 * 選択中でないウインドウもタッチできるようにする
 * (デフォルトは選択中のウインドウのみタッチ可能)
 * これは結構重要で、つまるところ、
 * 「目に見える部分は全てタッチできる」ようにするということ
 * 当たり前のように思えるが、デフォルトだと、
 * 選択中でないウインドウは見えていてもタッチできないのである
 * これは結構ストレスが溜まるので、それを解消するための機能
 * 
 * ●スワイプキャンセル(★重要)
 * 画面左右端での左右スワイプでキャンセルできるようにする
 * スマホでブラウジングしている時、
 * 画面左右端でスイッと指を動かして「戻る」を当然にやっていると思うのだが、
 * つまりアレと同じようなもの
 * やってみるとわかるがとても快適なキャンセルを実現する
 * 基本的にはタッチ操作を想定しているが、実はマウスでもできる
 * (マウスの場合は右クリックでキャンセルできるのであまり必要ないが)
 * なおスワイプ方向は左右どちらでもよい
 * 画面端でタッチする必要もなく、画面中央でタッチして、
 * そのまま指を放さず画面端に持っていくという形でも普通に発動する
 * ようは画面端で指を画面に付けたまま横に動かしさえすればよい
 * また、スワイプ発動したら即座にキャンセルも発動するわけではない
 * スワイプ発動状態で、そこから指を画面から離して初めてキャンセルされる
 * 指を付けている間はキャンセルされないのである。
 * 離したらキャンセルされるのだが、その前に指を縦に動かすことで
 * キャンセルを取りやめることもできる
 * 長々と説明しているが、直感的な操作だと思うので、
 * やってれば自然にわかるとは思う
 * 
 * ●スワイプスライド(★重要)
 * 画面中央での左右スワイプでキャラ切り替えできるようにする
 * 左スワイプで前のキャラに、右スワイプで次のキャラに切り替え
 * タッチ操作でも快適にキャラ切り替えできるようにする重要な機能
 * スワイプした後、すぐタッチすると連続でキャラ切り替えできる
 * 何度もタッチするとどんどん切り替え。テンポよく切り替えていくことができる
 * 
 * ●キャンセル省略
 * ダイレクトタッチ適用時、一部の余分なキャンセルを省略する
 * たとえばアイテムリストでキャンセルした時、普通はタブに戻るのだが、
 * 一足飛びにメインメニューまで戻るようにする
 * これはタブに戻る必要性が全くないからである
 * ダイレクトタッチ環境下ではタブを選びたいなら直接タッチすればいいのであり、
 * タブにカーソルを戻す必要は皆無
 * むしろメインメニューに戻る際にタブを経由する分キャンセルが2回必要になり
 * 余分でさえある。だから省略する
 * なお省略するのはタッチ操作時のみであり、
 * キー操作ではタブを飛ばされると困るので当然省略しない
 * マウス操作でも省略しない。あくまで画面に直接タッチする操作時だけ 
 * 
 * 
 * ■タッチ演出
 * 
 * ●タッチスター(★重要)
 * スワイプ時に光のエフェクトを表示する
 * スワイプすれば無条件に表示されるのではなく、
 * 上の『スワイプキャンセル』『スワイプスライド』が発動している時のみ
 * つまりタッチスターを見ることで、
 * 「スワイプキャンセルorスワイプスライドが発動しているか」を確認できるのである
 * ただ見た目が綺麗というだけでない重要な機能
 * 
 * 
 * ■装備
 * 
 * ●装備レイアウト改良(★重要)
 * 装備画面を開くと最初に装備スロットがアクティブになり、
 * すぐに装備変更できるようにする
 * また、装備スロットと装備コマンド上下キーで行き来できるようにする
 * 装備コマンドの「装備」は不要なので削除する
 * 
 * ●シフトキーで装備解除(★重要)
 * シフトキーで装備解除できるようにする
 * ワンボタンで装備解除できるようにする重要な機能
 * 正直これがあれば「全て外す」のコマンドは必要ない気がする
 * よほど装備スロットが多ければ別かもしれないが
 * 
 * ●装備コマンド削除
 * 「最強装備」「全て外す」があるウインドウを消す
 * 
 * 
 * ■セーブ
 * 
 * ●セーブフォーカス進めない
 * デフォルトではニューゲームした場合、未使用のセーブスロットにフォーカスが合う
 * 既存のセーブデータを上書きしないようにとの配慮であろうが、
 * 正直邪魔な時があるので無効化するという選択を用意している
 * 個人的にではあるが、ニューゲーム時とロード時でフォーカス位置が変わるのは、
 * 操作ミスを起こしやすくてとても邪魔
 * 「動作は条件に関わらずいつも同じ」が基本であると個人的には考えている
 *
 * 
 * ■コマンド記憶
 * 
 * ●記憶タイミング
 * 記憶タイミングを『選択時に記憶』にした場合、
 * 「カーソルを合わせた」時にその位置を記憶するようにする
 * (デフォルトは「決定した」時に記憶)
 * つまりデフォルトより記憶のタイミングが早い
 * 個人的にはこちらの方がしっくりくるのだが、好みによるかもしれない
 * 
 * 
 * ●記憶クリア方式
 * 記憶クリア方式を『メニュー閉じたらクリア』にした場合、
 * メニューを閉じたタイミングで記憶を消去するようにする
 * (デフォルトは消去しない。次にメニューを開いた時も記憶が残っている)
 * 個人的にはこちらがしっくりくるが、やはり好みかもしれない
 * 
 * 
 * ■戦闘メンバー強調
 * 
 * ●控え半透明化を無効
 * デフォルトでは戦闘メンバー以外の控えは半透明で表示されるが、
 * これが何となく気に入らない場合は無効にできる
 * 
 * ●バトラーマーク
 * 控え半透明化を無効にした場合、
 * 誰が戦闘メンバーなのかパッと見でわかりづらくなる
 * なので代わりに戦闘メンバーの顔グラ部分にマークを表示してわかりやすくする機能
 * マークといっても実際はテキストを表示するのだが、
 * テキスト内容は自由に設定できる
 * 
 * 
 * ■アイコンバック
 * アイコンに背景を付けて見やすくする
 * デフォルトのアイコンは元々背景が付いているので意味がないが、
 * 背景がついてない裸のアイコンを使う場合に有効
 * 背景の色や形は好きに設定できる
 * 
 * 
 * ■競合対策シーン
 * 競合対策するシーンを設定する
 * 競合している場合に使ってみよう
 * もしかしたら競合解消できるかもしれません
 * ●使い方
 * 競合対策シーンにたとえば Extra と入れると、
 * Scene_Extra クラスに対して競合対策するようなる。
 * Scene_ の部分は入力不要
 * 
 * 
 * ◆【パーティー編成補助】
 * プラグインコマンドでパーティ編成の助けとなる機能を用意している
 * 
 * ●パーティのクリア
 * パーティメンバーを全員外す
 * 
 * ●パーティのセーブ
 * 現在のパーティメンバーを保存する
 * スロット別に保存できる
 * 
 * ●パーティのロード
 * セーブしたパーティメンバーを復元する
 * 
 * 
 * ● 利用規約 ●
 * MITライセンスのもと、自由に使ってくれて大丈夫です
 *
 *
 * 
 * Add various functions to the menu and make it comfortable
 * Unnecessary functions can be turned off individually
 *
 * ◆【Functions list】
 * Functions that have a particularly large effect on improving comfort
 *  are marked with (★Important)
 * (★Conditionally Important) means that the effect is great 
 *  under certain conditions
 * 
 * ■ Scroll bar
 *
 * ● ScrollBar (★Important)
 * For vertically long windows, 
 * display a bar indicating the current scroll position
 * In addition to simply showing, 
 * you can grab and move the bar directly with touch or mouse
 * Quite frankly, it's exactly the same as the browser's scroll bar
 * I think you can use it without stress 
 *  because it is the same as what you are familiar with
 *
 *
 * ■ Wide look mode
 *
 * ● WideLookMode (★Conditionally important)
 * Party status on the menu main screen,
 * You can switch to "Window for viewing a large number of character"
 * This is called WideLook look mode. 
 * You can freely adjust the number of character 
 *  that can be displayed on one screen.
 * Switching is a key operation "Shift key"
 * For touch operation, swipe left or right at the center of the screen.
 * Actually this is exactly the same as "SwipeSlide" above,
 * "Swipe left or right in the center of the screen" will
 * On the skill/equipment/status screen, etc., "Slide Character"
 * On the menu main screen, you can "Switch to WideLook mode"
 * May not be necessary if you have a small number of friends,
 * It is a convenient function that is completely different if there are many
 *
 * 
 * ■ General operation
 *
 * ● PendingDragAndDrop (★Conditionally Important)
 * Make the sorting method "Grab the target with a decision and move it"
 * (Default is the replacement method 
 *  (grab the target by decision and replace it with the next decided target))
 * It may not be so necessary if the number of companions is small,
 * If there are many, you will be able to sort much more comfortably
 *
 * ● CharaSlideExtend (★Important)
 * On the skill screen, equipment screen, status screen, etc.,
 * Make it possible to switch characters 
 *  with the left and right key / mouse wheel
 * (default QW key only)
 *
 *
 * ■ Key operation
 *
 * ● ListVerticalLoop
 * like an item list,
 * Make it possible to loop vertically 
 *  even if the list is arranged horizontally in two or more rows.
 * (default loops only on one-row lists)
 *
 * ● ListHorizontalLoop
 * like an item list,
 * Make the first and last loop even for a list with two or more vertical lines
 * (default one-line list only)
 *
 * ● listJumpLeft/Right
 * Like party status in menu main screen
 * In the case of a list that extends vertically in one row,
 * Make it possible to move the cursor at once with the left and right keys
 * (default QW key only)
 *
 * ※ The common point between 
 *  "CharacSlideExtend" and "ListJumpLeftAndRight" is
 * Assigning the function of the QW key to the left and right keys
 * Since it's easier to press the left and right keys, 
 * it's better to be able to do that too.
 *
 *
 * ■ Touch operation
 *
 * ● SingleTouchOk (★Important)
 * Make it possible to decide with one touch
 * (default touches cursor,
 * Requires one more touch to desice)
 * In this case the cursor cannot be matched = help cannot be displayed,
 * The problem will be solved in the next "LongTouchSelect"
 *
 * ● LongTouchSelect(Important)
 * Long touch to match cursor
 * This is to solve the problem of "SingleTouchOk" above.
 * If you want to decide, "Touch and release immediately",
 * If you want to match the cursor, you will have to "Long touch"
 *
 * ● DirectTouch (★Important)
 * Make non-selected windows touchable
 * (By default, only the selected window can be touched)
 * This is pretty important, it boils down to
 * Make it possible to "touch all the visible parts"
 * Sounds obvious, but by default,
 * Windows that are not selected cannot be touched 
 *  even if they are visible.
 * This is quite stressful, so there is a function to relieve it
 *
 * ● SwipeCancel (★Important)
 * Make it possible to cancel by swiping left and right 
 *  at the left and right edges of the screen
 * When browsing on your smartphone,
 * I think that it is natural to 
 *  move your finger on the left and right edges of the screen to go back.
 * i.e. similar to that
 * As you can see, it makes canceling very comfortable
 * Basically, touch operation is assumed, but you can actually use a mouse
 * (With a mouse, 
 * you can cancel by right-clicking, so it's not really necessary)
 * The swipe activation can be left or right
 * No need to touch on the edge of the screen, 
 * touch in the center of the screen,
 * You can also activate normally 
 *  by bringing your finger to the edge of the screen without releasing it.
 * All you have to do is move your finger sideways 
 *  while keeping your finger on the screen at the edge of the screen.
 * Also, when swipe is activated, cancel is not immediately activated
 * In the swipe activated state, it will be canceled 
 *  for the first time when you take your finger off the screen from there
 * It is not canceled while fingering.
 * It will be canceled if you release it, 
 * but by moving your finger vertically before that
 * You can also cancel the cancellation
 * It's a long explanation, but I think it's an intuitive operation, so
 * I think you will understand naturally if you do it
 *
 * ● SwipeSlide (★Important)
 * Make it possible to switch characters 
 *  by swiping left and right in the center of the screen
 * Swipe left to switch to the previous character, 
 * swipe right to switch to the next character
 * An important function that allows comfortable character switching 
 *  even with touch operations
 * After swiping, 
 * if you touch immediately, you can switch characters continuously
 * If you touch it many times, it will switch more and more. 
 * Able to switch at a good tempo
 * 
 * ● CancelOmit
 * Omit some unnecessary cancels when applying direct touch
 * For example, when canceling in the item list, it usually returns to the tab,
 * Jump back to the main menu
 * This is because there is no need to go back to tabs at all.
 * In the direct touch environment, if you want to select a tab, 
 * you can touch it directly, No need to move cursor back to tab
 * Rather, you need to cancel twice for going through tabs 
 *  when returning to the main menu. even extra. so omit
 * Omitting is only for touch operation,
 * Do not omit tabs, 
 * as it would be a problem if tabs were skipped during key operations.
 * Do not omit mouse operations. Only when you touch the screen directly
 *
 *
 * ■ Touch Effects
 *
 * ● TouchStar (★Important)
 * Show light effect on swipe
 * It is not displayed unconditionally if you swipe,
 * Only when the above "SwipeCancel" and "SwipeSlide" are activated
 * In other words, by looking at the Touchster,
 * You can check "Whether swipe cancel or swipe slide is activated"
 * Important features that are not just beautiful
 *
 *
 * ■ Equipment
 *
 * ●EquipLayoutCustom (★Important)
 * When opening the equipment screen, the equipment slots will be active first,
 * allowing immediate equipment changes.
 * Additionally, allow switching between equipment slots
 * and equipment commands using the up and down arrow keys.
 * The "Equip" command in the equipment menu is unnecessary,
 * so it will be removed.
 *
 * ● UnequipByShiftKey (★important)
 * Allow to unequip with shift key
 * A key feature that allows you to unequip with a single button
 * To be honest, if you have this, 
 * I don't think you need the "Remove all" command.
 * It may be different if there are a lot of equipment slots
 * 
 * ● DelEquipCommand
 * Delete the window with "Strongest equipment" and "Remove all".
 *
 * 
 * ■ Save
 *
 * ● saveFocusNotNext
 * By default when you start a new game, unused save slots will be in focus
 * It may be a consideration not to overwrite existing save data,
 * To be honest, there are times when it gets in the way, 
 * so we have prepared an option to disable it.
 * Personally, the focus position changes between new game and load,
 * It is easy to make an operation mistake and it is very disturbing
 * Personally, I think that "the operation is always the same 
 *  regardless of the conditions" is the basic
 *
 *
 * ■ Command memory
 *
 * ● MemoryTiming
 * If the memory timing is set to "Remember when selected",
 * Make sure to remember the position when you "Hover over"
 * (default is remembered when "Decided")
 * In other words, the memory timing is faster than the default
 * Personally, I prefer this one, but it may depend on your taste.
 *
 * ● MemoryClearMethod
 * When the memory clear method is set to "Clear when the menu is closed",
 * Clear the memory when the menu is closed
 * (default is not erased, remembered next time you open the menu)
 * Personally, I like this one, but it may be my preference.
 *
 *
 * ■ Battle Member Highlight
 *
 * ● notranlucent
 * By default, non-batle members are displayed translucent,
 * If you somehow don't like this, you can disable it
 *
 * ● battlerMark
 * If you turn off translucent in advance,
 * It becomes difficult to understand who is a battle member at a glance
 * So instead, a function to display a mark on the face of the battle member 
 *  to make it easier to understand
 * The mark actually displays text, Text content can be set freely
 * 
 * 
 * ■ Icon back
 * Add a background to the icon to make it easier to see
 * The default icon originally has a background, so it doesn't make sense,
 * Useful when using bare icons with no background
 * Background color and shape can be set as you like
 * 
 * 
 * ■ To Conflict Scene
 * Set the scene for conflict countermeasures
 * Try using it if there is a conflict
 * Maybe we can resolve the conflict
 * ●How to use
 * For example, if you enter "Extra" in "toConflictScene",
 * Conflict measures will be taken against the "Scene_Extra" class.
 * No need to input "Scene_" part
 *
 *
 * ◆【Party Formation Assistance】
 * We have prepared a function that 
 *  will help you organize your party with plug-in commands.
 *
 * ● clearParty
 * Remove all party members
 *
 * ● saveParty
 * Save current party members
 * Save by slot
 *
 * ● loadParty
 * Restore saved party members
 *
 *
 * ● Terms of Use ●
 * Feel free to use it under the MIT license.
 * 
 * 
 * 
 * @param スクロールバー
 * 
 * @param スクロールバー表示
 * @parent スクロールバー
 * @desc showScrollBar スクロールバーを表示する
 * @type boolean
 * @default true
 * 
 * @param スクロールバーデザイン
 * @parent スクロールバー
 * @desc scrollBarDesign スクロールバーのデザイン設定
 * @type struct<scrollBarDesign>
 * @default {"太さ":"10","タッチ範囲太さ":"30","縁取り幅":"1","バー本体-色タイプ":"単色","バー本体色":"255, 128, 0, 1","バー本体色-グラデ":"255, 255, 255, 1","バー背景色":"96, 96, 96, 1","丸み":"5"}
 * 
 * @param 一覧モード
 * 
 * @param 一覧モード有効
 * @parent 一覧モード
 * @desc validWideLookMode　パーティ一覧モードを有効にする。shift/画面中央を左右スワイプで切り替え
 * @type boolean
 * @default true
 * 
 * @param 常に一覧モード
 * @parent 一覧モード
 * @desc wideLookModeAlways　常に一覧モードにする
 * @type boolean
 * @default false
 * 
 * @param 一覧ウインドウ設定
 * @parent 一覧モード
 * @desc WideLookWindowCfg パーティ一覧ウインドウの設定
 * @type struct<wideLookWindowCfg>
 * @default {"横の表示数":"4","縦の表示数":"5","縦表示数の自動調整":"true","…縦の最低数":"2","全体サイズ率":"1","小型化補正":"0.95","顔グラ丸み":"40","カーソル":"","カーソル表示":"true","標準カーソル消去":"true","カーソルサイズ+":"8","カーソル丸み":"40","カーソル色":"0, 255, 255","カーソル色(並べ替え)":"255, 255, 0","バトラー枠":"","バトラー枠-表示":"false","バトラー枠-太さ":"5","バトラー枠-色":"255, 224, 0","名前表示":"","名前-表示":"true","名前-配置":"左上","名前-ずらしX":"0","名前-ずらしY":"0","名前-文字サイズ":"18","名前-文字色":"255, 255, 255","名前-縁取り幅":"5","名前-隠す行数":"","職業表示":"","職業-表示":"true","職業-配置":"左上","職業-ずらしX":"0","職業-ずらしY":"20","職業-文字サイズ":"18","職業-文字色":"255, 255, 255","職業-縁取り幅":"5","職業-隠す行数":"3","ステータス表示":"","ステータス-表示":"true","ステータス-配置":"右下","ステータス-ずらしX":"0","ステータス-ずらしY":"0","ステータス-文字サイズ":"18","ステータス-縁取り幅":"5","ステータス-ゲージ高さ":"10","ステータス-横幅":"64","ステータス-行間":"3","ステータス-隠す行数":"","レベル表示":"","レベル-表示":"true","レベル-配置":"左下","レベル-ずらしX":"0","レベル-ずらしY":"-5","レベル-文字サイズ":"18","レベル-文字色":"255, 255, 255","レベル-縁取り幅":"5","レベル-ラベル幅":"30","レベル-横幅":"36","レベル-隠す行数":"","ステートアイコン":"","ステート-表示":"true","ステート-配置":"左下","ステート-ずらしX":"0","ステート-ずらしY":"32","ステート-隠す行数":"3"}
 * 
 * @param 操作全般
 * 
 * @param 並べ替えドラッグ&ドロップ
 * @parent 操作全般
 * @desc pendingDrag&Drop メンバーの並べ替えをドラッグ&ドロップ方式にする
 * @type boolean
 * @default true
 * 
 * @param キャラ切り替え拡張
 * @parent 操作全般
 * @desc charaSlidePlus 左右キー/マウスホイール/でもキャラ切り替えをできるようにする(スキル/装備/ステータス画面)
 * @type boolean
 * @default true
 * 
 * @param キー操作
 * 
 * @param リスト縦ループ強化
 * @parent キー操作
 * @desc listVerticalLoop リストの縦ループを強化する
 * @type boolean
 * @default true
 * 
 * @param リスト横ループ強化
 * @parent キー操作
 * @desc listHorizontalLoop リストの横ループを強化する
 * @type boolean
 * @default true
 * 
 * @param リスト左右キーでジャンプ
 * @parent キー操作
 * @desc listJumpLeft/Right リストが横1列のとき左右キーで一気にカーソル移動できるようにする
 * @type boolean
 * @default true
 * 
 * @param タッチ操作
 * 
 * @param シングルタッチで決定
 * @parent タッチ操作
 * @desc singleTouchOk シングルタッチで決定できるようにする
 * @type boolean
 * @default true
 * 
 * @param ロングタッチセレクト
 * @parent タッチ操作
 * @desc longTouchCancel ロングタッチでカーソルを合わせられるようにする
 * @type boolean
 * @default true
 * 
 * @param ダイレクトタッチ
 * @parent タッチ操作
 * @desc directTouch アクティブでないウインドウもタッチできるようにする
 * @type boolean
 * @default true
 * 
 * @param スワイプキャンセル
 * @parent タッチ操作
 * @desc swipeCancel 画面左右端での左右スワイプでキャンセルできるようにする
 * @type boolean
 * @default true
 * 
 * @param スワイプスライド
 * @parent タッチ操作
 * @desc swipeSlide 画面中央でのスワイプでキャラ切り替えできるようにする
 * @type boolean
 * @default true
 * 
 * @param キャンセル省略
 * @parent タッチ操作
 * @desc cancelOmit タッチ操作時、余分なキャンセルを省略する。アイテムリストでのキャンセルでメインに戻るなど
 * @type boolean
 * @default true
 * 
 * @param タッチ設定
 * @parent タッチ操作
 * @desc swipeCfg タッチ操作の詳細設定
 * @type struct<touchCfg>
 * @default {"ロングタッチ":"","ロングタッチ時間":"15","スワイプキャンセル":"","メニュー以外にも適用":"true","キャンセルエリア幅":"50","キャンセル遊び":"10","スワイプスライド":"","連鎖スライド時間":"0","スライドエリア幅":"100","スライド遊び":"10"}
 * 
 * @param タッチ演出
 * 
 * @param タッチスター表示
 * @parent タッチ演出
 * @desc showTouchStar タッチスワイプ時に光のエフェクトを表示する
 * @type boolean
 * @default true
 * 
 * @param タッチスターデザイン
 * @parent タッチ演出
 * @desc touchStarDesign タッチスターのデザイン設定
 * @type struct<touchStarDesign>
 * @default {"持続時間":"30","消えていく時間":"30","生成数":"2","フォーム":"スター(星形)","カラー":"255, 255, 0","不透明度":"192","不透明度-乱数":"32","サイズ":"20","サイズ-乱数":"5","位置X":"0","位置Y":"0","移動X":"0","移動X-乱数":"0","移動Y":"0","移動Y-乱数":"0","スケールX":"1.5","スケールX-乱数":"0.5","スケールY":"1.5","スケールY-乱数":"0.5","拡大量":"2","拡大量-乱数":"0.5"}
 * 
 * @param 装備
 * 
 * @param 装備レイアウト改良
 * @parent 装備
 * @desc equipLayoutCustom 装備画面のレイアウトと操作性を改善する
 * @type boolean
 * @default true
 * 
 * @param シフトキーで装備解除
 * @parent 装備
 * @desc remEquipByShiftKey シフトキーで装備解除できるようにする
 * @type boolean
 * @default true
 * 
 * @param ロングタッチで装備解除
 * @parent 装備
 * @desc remEquipByLongTouch ロングタッチで装備解除できるようにする
 * @type boolean
 * @default true
 * 
 * @param 装備コマンド削除
 * @parent 装備
 * @desc delEquipCommand 装備コマンド(最強装備/全て外す)を消去する
 * @type boolean
 * @default false
 * 
 * @param セーブ
 * 
 * @param セーブフォーカス進めない
 * @parent セーブ
 * @desc saveFocusNotNext ニューゲーム時のセーブフォーカスを未使用スロットにしない
 * @type boolean
 * @default true
 * 
 * @param コマンド記憶
 * 
 * @param 記憶タイミング
 * @parent コマンド記憶
 * @desc memoryTiming コマンド記憶をカーソル選択時に記憶るか、決定時に記憶するか
 * @type select
 * @option 選択時に記憶
 * @option 決定時に記憶(デフォルト)
 * @default 選択時に記憶
 * 
 * @param 記憶クリア方式
 * @parent コマンド記憶
 * @desc memoryClearMethod コマンド記憶をメニューを閉じたらクリアするか、しないか、オプションと連動するか
 * @type select
 * @option メニュー閉じたらクリア
 * @option クリアしない(デフォルト)
 * @option オプションと連動
 * @default メニュー閉じたらクリア
 * 
 * @param 戦闘メンバー強調
 * 
 * @param 控え半透明化を無効
 * @parent 戦闘メンバー強調
 * @desc noReseveTranslucent 控えメンバーの顔グラ半透明化を無効にする
 * @type boolean
 * @default true
 * 
 * @param バトラーマーク表示
 * @parent 戦闘メンバー強調
 * @desc battlerMark 戦闘参加メンバーにマークを付ける
 * @type boolean
 * @default true
 * 
 * @param バトラーマーク設定
 * @parent 戦闘メンバー強調
 * @desc battlerMarkCfg バトラーマークの設定
 * @type struct<battlerMarkCfg>
 * @default {"表示":"true","配置":"左下","ずらしX":"0","ずらしY":"0","テキスト":"Battler","文字サイズ":"14","文字色":"255, 192, 0","縁取り幅":"6"}
 * 
 * @param アイコンバック
 * 
 * @param アイコンバック表示
 * @parent アイコンバック
 * @desc showIconBack アイコンに背景を付けて強調する
 * @type boolean
 * @default true
 * 
 * @param アイコンバックデザイン
 * @parent アイコンバック
 * @desc iconBackDesign アイコンバックのデザイン設定
 * @type struct<iconBackDesign>
 * @default {"バック色":"255, 255, 255, 1","縁取り幅":"1.5","縁取り色":"0, 0, 0, 1","丸み":"10"}
 * 
 * @param 競合対策
 * 
 * @param 競合対策シーン
 * @parent 競合対策
 * @desc toConflictScene 競合対策するシーンのリスト。Extra と入れると Scene_Extra に対して対策する。競合解消できるかも
 * @type string[]
 * @default ["AdditionalCC"]
 * 
 * 
 * 
 * 
 * @command パーティのクリア
 * @desc clearParty パーティメンバーを全員外す
 * 
 * 
 * @command パーティのセーブ
 * @desc saveParty 現在のパーティを保存する
 * 
 * @arg セープスロット
 * @desc saveSlot セーブするスロット
 * @type select
 * @option スロット1
 * @option スロット2
 * @option スロット3
 * @option スロット4
 * @option スロット5
 * @default スロット1
 * 
 * 
 * 
 * @command パーティのロード
 * @desc restoreParty 保存したパーティを復元する
 *
 * @arg ロードスロット
 * @desc loadSlop ロードするスロット
 * @type select
 * @option スロット1
 * @option スロット2
 * @option スロット3
 * @option スロット4
 * @option スロット5
 * @default スロット1
 */



//==================================================
/*~struct~scrollBarDesign:
//==================================================
 * @param 太さ
 * @desc width スクロールバーの太さ。5 なら 5ピクセル。基本 10
 * @default 10
 * 
 * @param タッチ範囲太さ
 * @desc touchScopeWidth スクロールバーのタッチ範囲の太さ。5 なら 5ピクセル。基本 30
 * @default 30
 * 
 * @param 縁取り幅
 * @desc outWidth スクロールバーの縁取り幅。5 なら 5ピクセル。基本 1
 * @default 1
 * 
 * @param バー本体-色タイプ
 * @desc barColor バー本体の色を単色にするかグラデーションにするか
 * @type select
 * @option 単色
 * @option グラデーション
 * @default 単色
 * 
 * @param バー本体色
 * @desc barColor バー本体の色。赤, 緑, 青, 濃度。色0～255、濃度0～1。基本 255, 128, 0, 1
 * @default 255, 128, 0, 1
 * 
 * @param バー本体色-グラデ
 * @desc barColor バー本体のグラデーション色。赤, 緑, 青, 濃度。色0～255、濃度0～1。基本 255, 128, 0, 1
 * @default 255, 255, 255, 1
 * 
 * @param バー背景色
 * @desc backColor バーの背景部分の色。赤, 緑, 青, 濃度。色0～255、濃度0～1。基本 96, 96, 96, 1
 * @default 96, 96, 96, 1
 *
 * @param 丸み
 * @desc round スクロールバーの角の丸さ。5 なら 5ピクセル 丸まる。基本 6
 * @default 6
 */



//==================================================
/*~struct~touchStarDesign:
//==================================================
 * @param 持続時間
 * @desc keepTime タッチスターが持続する時間。5 なら 5フレーム、1s なら 1秒。基本 30
 * @default 30
 *
 * @param 消えていく時間
 * @desc delTime タッチスターが消えていく時間。5 なら 5フレーム、1s なら 1秒。基本 30
 * @default 30
 * 
 * @param 生成数
 * @desc createNum 1フレームあたり生成するスプライト数。基本 2
 * @default 2
 * 
 * @param フォーム
 * @desc color タッチスターの形状
 * @type select
 * @option スター(星形)
 * @option スクエア(四角形)
 * @option サークル(円形)
 * @default スター(星形)
 * 
 * @param カラー
 * @desc color タッチスターの色。(赤, 緑, 青)。各0〜255。基本 255, 255, 0
 * @default 255, 255, 0
 *
 * @param 不透明度
 * @desc opacity タッチスターの不透明度。0〜255。値を増やすほど濃くなる。0 だと透明。基本 192
 * @default 192
 *
 * @param 不透明度-乱数
 * @desc opacity-rand 不透明度の乱数。5 なら -5〜5 が加算される。基本 32
 * @default 32
 *
 * @param サイズ
 * @desc size タッチスターの直径。5 なら 5ピクセル幅。基本 20
 * @default 20
 *
 * @param サイズ-乱数
 * @desc size-rand サイズの乱数。5 なら -5〜5 が加算される。基本 5
 * @default 5
 *
 * @param 位置X
 * @desc posX タッチスターのX初期位置。5 なら右に 5ピクセル。基本 0
 * @default 0
 *
 * @param 位置Y
 * @desc posY タッチスターのY初期位置。5 なら下に 5ピクセル。基本 0
 * @default 0
 *
 * @param 移動X
 * @desc moveXz タッチスターのX移動量。5 なら右に 5ピクセル 移動。基本 0
 * @default 0
 *
 * @param 移動X-乱数
 * @desc moveX-rand 移動Xの乱数。5 なら -5〜5 が加算される。基本 0
 * @default 0
 *
 * @param 移動Y
 * @desc moveY タッチスターのY移動量。-5 なら上に 5ピクセル 移動。基本 0
 * @default 0
 *
 * @param 移動Y-乱数
 * @desc moveY-rand 移動Yの乱数。5 なら -5〜5 が加算される。基本 0
 * @default 0
 *
 * @param スケールX
 * @desc scaleX タッチスターの横方向の初期拡大率。1.5 なら 1.5倍。基本 1.5
 * @default 1.5
 *
 * @param スケールX-乱数
 * @desc scaleX-rand スケールXの乱数。5 なら -5〜5 が加算される。基本 0.5
 * @default 0.5
 *
 * @param スケールY
 * @desc scaleY タッチスターの縦方向の初期拡大率。1.5 なら 1.5倍。基本 1.5
 * @default 1.5
 *
 * @param スケールY-乱数
 * @desc scaleY-rand スケールYの乱数。5 なら -5〜5 が加算される。基本 0.5
 * @default 0.5
 *
 * @param 拡大量
 * @desc scaleDrift タッチスターの拡大量。1.5 なら 拡大率を 1.5 増加。基本 2
 * @default 2
 *
 * @param 拡大量-乱数
 * @desc scaleDrift-rand 拡大量の乱数。5 なら -5〜5 が加算される。基本 0.5
 * @default 0.5
 */



//==================================================
/*~struct~touchCfg:
//==================================================
 * @param ロングタッチ
 *
 * @param ロングタッチ時間
 * @parent ロングタッチ
 * @desc longTouchTime タッチしてからロングタッチが発動するまでの時間。5 なら 5フレーム。基本 15
 * @default 15
 * 
 * @param スワイプキャンセル
 * 
 * @param メニュー以外にも適用
 * @parent スワイプキャンセル
 * @desc swipeCancelOtherThanMenu スワイプキャンセルをメニュー以外にも適用する
 * @type boolean
 * @default true
 * 
 * @param キャンセルエリア幅
 * @parent スワイプキャンセル
 * @desc swipeAreaWidth 画面左端と右端のスワイプキャンセルを受け付けるエリアの横幅。50 なら 50ピクセル。基本 50
 * @default 50
 * 
 * @param キャンセル遊び
 * @parent スワイプキャンセル
 * @desc swipeCancelPlay スワイプキャンセルの遊び(発動しない距離)。5 なら 5ピクセル。基本 10
 * @default 10
 * 
 * @param スワイプスライド
 * 
 * @param 連鎖スライド時間
 * @parent スワイプスライド
 * @desc chainSlideTime スライド後、画面タッチすると再度スライドする。その受付時間。5 なら 5フレーム。0 なら無制限。基本 0
 * @default 0
 * 
 * @param スライドエリア幅
 * @parent スワイプスライド
 * @desc swipeAreaWidth 画面中央のスワイプスライドを受け付けるエリアの横幅。50 なら 50ピクセル。基本 100
 * @default 100
 * 
 * @param スライド遊び
 * @parent スワイプスライド
 * @desc swipeSlidePlay スワイプスライドの遊び(発動しない距離)。5 なら 5ピクセル。基本 10
 * @default 10
*/



//==================================================
/*~struct~wideLookWindowCfg:
//==================================================
 * @param 横の表示数
 * @desc xNum 横のメンバー表示数。基本 4
 * @default 4
 * 
 * @param 縦の表示数
 * @desc yNum 縦のメンバー表示数。基本 5
 * @default 5
 * 
 * @param 縦表示数の自動調整
 * @desc yNumAutoAdjust メンバーが少ないとき縦の表示数を減らす方向に自動調整する。基本 true
 * @type boolean
 * @default true
 * 
 * @param …縦の最低数
 * @desc yNumMin 自動調整時の縦の最低表示数。メンバーがどれだけ少なくてもこの値は下回らない。基本 2
 * @default 2
 * 
 * @param 全体サイズ率
 * @desc globalSizeRate 表示項目すべてに適用されるサイズ率。基本 1.25
 * @default 1.25
 * 
 * @param 小型化補正
 * @desc miniRevise 行数が増えるほどに表示項目を小型化させる。0.9 なら 1行増えるごとに 0.9倍。基本 0.93
 * @default 0.93
 * 
 * @param 顔グラ横幅
 * @desc faceWidth 顔グラの横幅。50 なら 50ピクセル。基本 144
 * @default 144
 * 
 * @param 顔グラ高さ
 * @desc faceHeight 顔グラの縦高。50 なら 50ピクセル。基本 144
 * @default 144
 * 
 * @param 顔グラ丸み
 * @desc faceRound 顔グラの角の丸み。5 なら 5ピクセル 丸まる。基本 40
 * @default 40
 * 
 * @param カーソル
 * 
 * @param カーソル表示
 * @parent カーソル
 * @desc showCursor 一覧モード専用のカーソルを表示する
 * @type boolean
 * @default true
 * 
 * 
 * @param 標準カーソル消去
 * @parent カーソル
 * @desc delDefaultCursor 標準のカーソルを表示しない
 * @type boolean
 * @default true
 * 
 * 
 * @param カーソルサイズ+
 * @parent カーソル
 * @desc cursorSizePlus カーソルサイズの拡張幅。5 なら 5ピクセル 拡張。基本 8
 * @default 8
 * 
 * @param カーソル丸み
 * @parent カーソル
 * @desc cursorRound カーソルの角の丸み。5 なら 5ピクセル 丸まる。基本 40
 * @default 40
 * 
 * @param カーソル色
 * @parent カーソル
 * @desc cursorColor。カーソルの色。赤, 緑, 青。各0～255。基本 0, 255, 255
 * @default 0, 255, 255
 * 
 * @param カーソル色(並べ替え)
 * @parent カーソル
 * @desc cursorColorPending。並べ替え時のカーソルの色。赤, 緑, 青。各0～255。基本 255, 255, 0
 * @default 255, 255, 0
 * 
 * @param バトラー枠
 * 
 * @param バトラー枠-表示
 * @parent バトラー枠
 * @desc showBattlerRect バトラー枠を表示する
 * @type boolean
 * @default false
 * 
 * @param バトラー枠-太さ
 * @parent バトラー枠
 * @desc battlerRectWidth バトラー枠の太さ。基本 5
 * @default 5
 * 
 * @param バトラー枠-色
 * @parent バトラー枠
 * @desc battlerRectColor バトラー枠の色。赤, 緑, 青。各0～255。基本 255, 224, 0
 * @default 255, 224, 0
 * 
 * @param 名前表示
 * 
 * @param 名前-表示
 * @parent 名前表示
 * @desc name-show キャラの名前を表示する
 * @type boolean
 * @default true
 * 
 * @param 名前-配置
 * @parent 名前表示
 * @desc name-put 名前の配置位置。基本 左上
 * @type select
 * @option 左上
 * @option 左下
 * @option 右上
 * @option 右下
 * @default 左上
 * 
 * @param 名前-ずらしX
 * @parent 名前表示
 * @desc name-offsetX 名前のX位置ずらし。5 なら 5ピクセル 右へ。基本 0
 * @default 0
 * 
 * @param 名前-ずらしY
 * @parent 名前表示
 * @desc name-offsetY 名前のY位置ずらし。5 なら 5ピクセル 下へ。基本 0
 * @default 0
 * 
 * @param 名前-文字サイズ
 * @parent 名前表示
 * @desc name-fontSize 名前の文字サイズ。基本 18
 * @default 18
 * 
 * @param 名前-文字色
 * @parent 名前表示
 * @desc name-textColor 名前の文字色。赤, 緑, 青。各0～255。基本 255, 255, 255
 * @default 255, 255, 255
 * 
 * @param 名前-縁取り幅
 * @parent 名前表示
 * @desc name-outWidth 名前の縁取り幅。基本 5
 * @default 5
 * 
 * @param 名前-隠す行数
 * @parent 名前表示
 * @desc name-hideRows。パーティがこの行数以上なら名前表示を隠す。空欄なら隠さない
 * 
 * @param 職業表示
 * 
 * @param 職業-表示
 * @parent 職業表示
 * @desc class-show キャラの職業を表示する
 * @type boolean
 * @default true
 * 
 * @param 職業-配置
 * @parent 職業表示
 * @desc class-put 職業の配置位置。基本 左上
 * @type select
 * @option 左上
 * @option 左下
 * @option 右上
 * @option 右下
 * @default 左上
 * 
 * @param 職業-ずらしX
 * @parent 職業表示
 * @desc class-offsetX 職業のX位置ずらし。5 なら 5ピクセル 右へ。基本 0
 * @default 0
 * 
 * @param 職業-ずらしY
 * @parent 職業表示
 * @desc class-offsetY 職業のY位置ずらし。5 なら 5ピクセル 下へ。基本 20
 * @default 20
 * 
 * @param 職業-文字サイズ
 * @parent 職業表示
 * @desc class-fontSize 職業の文字サイズ。基本 18
 * @default 18
 * 
 * @param 職業-文字色
 * @parent 職業表示
 * @desc class-textColor 職業の文字色。赤, 緑, 青。各0～255。基本 255, 255, 255
 * @default 255, 255, 255
 * 
 * @param 職業-縁取り幅
 * @parent 職業表示
 * @desc class-outWidth 職業の縁取り幅。基本 5
 * @default 5
 * 
 * @param 職業-隠す行数
 * @parent 職業表示
 * @desc class-hideRows。パーティがこの行数以上なら職業表示を隠す。空欄なら隠さない。基本 3
 * @default 3
 * 
 * @param ステータス表示
 * 
 * @param ステータス-表示
 * @parent ステータス表示
 * @desc status-show キャラのHPMPTPを表示する
 * @type boolean
 * @default true
 * 
 * @param ステータス-配置
 * @parent ステータス表示
 * @desc status-put ステータスの配置位置。基本 右下
 * @type select
 * @option 左上
 * @option 左下
 * @option 右上
 * @option 右下
 * @default 右下
 * 
 * @param ステータス-ずらしX
 * @parent ステータス表示
 * @desc status-offsetX ステータスのX位置ずらし。5 なら 5ピクセル 右へ。基本 0
 * @default 0
 * 
 * @param ステータス-ずらしY
 * @parent ステータス表示
 * @desc status-offsetY ステータスのY位置ずらし。5 なら 5ピクセル 下へ。基本 0
 * @default 0
 * 
 * @param ステータス-文字サイズ
 * @parent ステータス表示
 * @desc status-fontSize ステータスの文字サイズ。基本 18
 * @default 18
 *
 * @param ステータス-縁取り幅
 * @parent ステータス表示
 * @desc status-outWidth ステータスの文字の縁取り幅。基本 4
 * @default 4
 * 
 * @param ステータス-ゲージ高さ
 * @parent ステータス表示
 * @desc status-gaugeHeight ステータスのゲージの太さ。5 なら 5ピクセル。基本 10
 * @default 10
 * 
 * @param ステータス-横幅
 * @parent ステータス表示
 * @desc status-width ステータスの横幅。50 なら 50ピクセル。基本 64
 * @default 64
 * 
 * @param ステータス-行間
 * @parent ステータス表示
 * @desc status-lineSpace ステータスの行間。5 なら 5ピクセル。基本 3
 * @default 3
 * 
 * @param ステータス-隠す行数
 * @parent ステータス表示
 * @desc status-hideRows。パーティがこの行数以上ならステータス表示を隠す。空欄なら隠さない
 * 
 * @param レベル表示
 * 
 * @param レベル-表示
 * @parent レベル表示
 * @desc level-show キャラのレベルを表示する
 * @type boolean
 * @default true
 * 
 * @param レベル-配置
 * @parent レベル表示
 * @desc level-put レベルの配置位置。基本 左下
 * @type select
 * @option 左上
 * @option 左下
 * @option 右上
 * @option 右下
 * @default 左下
 * 
 * @param レベル-ずらしX
 * @parent レベル表示
 * @desc level-offsetX レベルのX位置ずらし。5 なら 5ピクセル 右へ。基本 0
 * @default 0
 * 
 * @param レベル-ずらしY
 * @parent レベル表示
 * @desc level-offsetY レベルのY位置ずらし。5 なら 5ピクセル 下へ。基本 -5
 * @default -5
 * 
 * @param レベル-文字サイズ
 * @parent レベル表示
 * @desc level-fontSize レベルの文字サイズ。基本 18
 * @default 18
 * 
 * @param レベル-文字色
 * @parent レベル表示
 * @desc level-textColor レベルの文字色。赤, 緑, 青。各0～255。基本 255, 255, 255
 * @default 255, 255, 255
 * 
 * @param レベル-縁取り幅
 * @parent レベル表示
 * @desc level-outWidth レベルの縁取り幅。基本 5
 * @default 5
 *
 * @param レベル-ラベル幅
 * @parent レベル表示
 * @desc level-width レベルのラベル部分の横幅。50 なら 50ピクセル。基本 30
 * @default 30
 * 
 * @param レベル-横幅
 * @parent レベル表示
 * @desc level-width レベルの横幅。50 なら 50ピクセル。基本 36
 * @default 36
 * 
 * @param レベル-隠す行数
 * @parent レベル表示
 * @desc level-hideRows。パーティがこの行数以上ならレベル表示を隠す。空欄なら隠さない
 * 
 * @param ステートアイコン
 * 
 * @param ステート-表示
 * @parent ステートアイコン
 * @desc state-show ステートアイコンを表示する
 * @type boolean
 * @default true
 * 
 * @param ステート-配置
 * @parent ステートアイコン
 * @desc state-put ステートアイコンの配置位置。基本 左下
 * @type select
 * @option 左上
 * @option 左下
 * @option 右上
 * @option 右下
 * @default 左下
 * 
 * @param ステート-ずらしX
 * @parent ステートアイコン
 * @desc state-offsetX ステートアイコンのX位置ずらし。5 なら 5ピクセル 右へ。基本 0
 * @default 0
 * 
 * @param ステート-ずらしY
 * @parent ステートアイコン
 * @desc state-offsetY ステートアイコンのY位置ずらし。5 なら 5ピクセル 下へ。基本 32
 * @default 32
 * 
 * @param ステート-隠す行数
 * @parent ステートアイコン
 * @desc state-hideRows。パーティがこの行数以上ならステートアイコンを隠す。空欄なら隠さない。基本 3
 * @default 3
 */



//==================================================
/*~struct~battlerMarkCfg:
//==================================================
 * @param 表示
 * @desc show バトラーマーク(戦闘メンバーの目印)を表示する
 * @type boolean
 * @default true
 * 
 * @param 配置
 * @desc put バトラーマークの配置位置。基本 左下
 * @type select
 * @option 左上
 * @option 左下
 * @option 右上
 * @option 右下
 * @default 左下
 * 
 * @param ずらしX
 * @desc offsetX X位置ずらし。5 なら 5ピクセル 右へ。基本 0
 * @default 0
 * 
 * @param ずらしY
 * @desc offsetY Y位置ずらし。5 なら 5ピクセル 下へ。基本 0
 * @default 0
 * 
 * @param テキスト
 * @desc text バトラーマークの表示テキスト。基本 Battler
 * @default Battler
 * 
 * @param 文字サイズ
 * @desc fontSize バトラーマークの文字サイズ。基本 14
 * @default 14
 * 
 * @param 文字色
 * @desc textColor バトラーマークの文字色。赤, 緑, 青。各0～255。基本 255, 192, 0
 * @default 255, 192, 0
 * 
 * @param 縁取り幅
 * @desc outWidth バトラーマークの縁取り幅。基本 6
 * @default 6
 */



//==================================================
/*~struct~iconBackDesign:
//==================================================
 * @param バック色
 * @desc backColor アイコンバックの色。赤, 緑, 青, 濃度。色0～255、濃度0～1。基本 255, 128, 0, 1
 * @default 255, 255, 255, 1
 * 
 * @param 縁取り幅
 * @desc outWidth アイコンバックの縁取りの太さ。5 なら 5ピクセル。基本 1.5
 * @default 1.5
 * 
 * @param 縁取り色
 * @desc outColor アイコンバックの縁取りの色。赤, 緑, 青, 濃度。色0～255、濃度0～1。基本 0, 0, 0, 1
 * @default 0, 0, 0, 1
 * 
 * @param 丸み
 * @desc round アイコンバック角の丸さ。5 なら 5ピクセル 丸まる。基本 10
 * @default 10
 */
 
 
 
(() => {
    //- プラグイン名
    const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];



    //==================================================
    //--  公開メソッド
    //==================================================

    //- アイコンバックの描画(公開)
    Game_Temp.prototype.drawIconBackKe = function(...args) {
        drawIconBack(...args);
    };



    //==================================================
    //-- 他プラグインとの連携メソッド
    //==================================================

    //- 顔グラメイクの形成
    function createFaceMake(battler, option) {
        if (!$gameTemp.createFaceMakeKe) { return false; }
        return $gameTemp.createFaceMakeKe.apply(this, arguments);
    };

    //- 顔グラメイクへの描画
    function drawToFaceMake(actor, windo, text, textW, fontSize, outW, put, offsetX, offsetY) {
        if (!$gameTemp.drawToFaceMakeKe) { return false; }
        return $gameTemp.drawToFaceMakeKe.apply(this, arguments);
    };

    //- 最大レベルの取得
    function getMaxLevel(actor) {
        if (!$gameTemp.getMaxLevelKe) { return null; }
        return $gameTemp.getMaxLevelKe(actor);
    };



    //==================================================
    //-- ファイル変数
    //==================================================

    // ダイレクトタッチ中フラグ
    let InDirectTouch = false;
    // ロングタッチセレクト中フラグ
    let InLongTouchSelect = false;
    // 控え半透明化を無効
    let NoTranslucent = false;
    // ホイールウェイト
    const WheelWait = 10;



    //==================================================
    //--  文字列オート変換 /ベーシック
    //==================================================
    
    // 文字列のハッシュ化
    function strToHash(str) {
        if (!str || !str.length) { return {}; }
        let hash = {};
        const strs = JSON.parse(str);
        let val = null;
        let val2 = null;
        for (let key in strs) {
            val = strs[key];
            if (!key || !val) { continue; }
            val2 = strToAuto(val, key);
            hash[key] = val2;
        }
        return hash;
    };
    
    // 文字列のリスト化
    function strToList(str) {
        if (!str || !str.length) { return []; }
        let array = JSON.parse(str);
        return array.map((val, i) => {
            return strToAuto(val);
        }, this);
    };
    
    // 文字列の自動処理
    function strToAuto(val, key = "") {
        let val2 = null;
        let match = null;
        let end = false;
        if (!end) {
            if (val[0] == "{") {
                val2 = strToHash(val);
                end = true;
            }
        }
        if (!end) {
            if (val[0] == "[") {
                val2 = strToList(val);
                end = true;
            }
        }
        if (!end) { val = val + ","; }
        if (!end) {
            match = val.match(/^\s*(-?\d+,\s*-?\d+,\s*-?\d+,?\s*-?\d*\.?\d*)\s*,$/);
            if (match && !val.match(/[^\d\.\-,\s]/)) {
                if (key.match(/(カラー|色|塗り)/) && !key.includes("トーン") && !key.includes("ブレンド") && !key.includes("配色") && !key.includes("着色") &&  !key.includes("フラッシュ") && !key.includes("チェンジ") &&  !key.includes("選択")) {
                    val2 = "rgba(" +  match[1] + ")";
                } else {
                    val2 = JSON.parse("[" +  match[1] + "]");
                }
                end = true;
            }
        }
        if (!end) {
            match = val.match(/(-?\d+\.?\d*),\s*/g);
            if (match && match.length >= 2 && !val.match(/[^\d\.\-,\s]/)) {
                val2 = JSON.parse("[" + match.reduce((r, s) => r + s).replace(/,$/, "") + "]");
                end = true;
            }
        }
        if (!end) {
            match = val.match(/^(true|false)\s*,/);
            if (match) {
                val2 = match[1] == "true" ? true : false;
                end = true;
            }
        }
        if (!end) {
            match = val.match(/^(-?\d+\.?\d*)\s*,/);
            if (match && !val.match(/[^\d\.\-,\s]/)) {
                val2 = Number(match[1]); end = true;
                end = true;
            }
        }
        if (!end) {
            match = val.match(/^.+,.+/);
            if (match) {
                val2 = val.replace(/\s/g, "").split(",").filter(v => v);
                end = true;
            }
        }
        if (!end) {
            if (val[0] == "\"") { val = val.slice(1); }
            val2 = val.slice(0, -1);
        }
        return val2;
    };



    //==================================================
    //--  パラメータ受け取り
    //==================================================
    
    //- 真偽化
    function toBoolean(str) {
        if (!str) { return false; }
        const str2 = str.toString().toLowerCase();
        if (str2 == "true" || str2 == "on") { return true; }
        if (str2 == "false" || str2 == "off") { return false; }
        return Number(str);
    };

    let parameters = PluginManager.parameters(pluginName);
    
    //- 操作全般
    const keke_pendingDragAndDrop = toBoolean(parameters["並べ替えドラッグ&ドロップ"]);
    const keke_charaSlideExtend = toBoolean(parameters["キャラ切り替え拡張"]);

    //- キー操作
    const keke_listVerticalLoop = toBoolean(parameters["リスト縦ループ強化"]);
    const keke_listHorizontalLoop = toBoolean(parameters["リスト横ループ強化"]);
    const keke_listLRJump = toBoolean(parameters["リスト左右キーでジャンプ"]);

    //- タッチ操作
    const keke_singleTouchOk = toBoolean(parameters["シングルタッチで決定"]);
    const keke_directTouch = toBoolean(parameters["ダイレクトタッチ"]);
    const keke_longTouchSelect = toBoolean(parameters["ロングタッチセレクト"]);
    const keke_swipeCancel = toBoolean(parameters["スワイプキャンセル"]);
    const keke_swipeSlide = toBoolean(parameters["スワイプスライド"]);
    const keke_cancelOmit = toBoolean(parameters["キャンセル省略"]);
    const keke_touchCfg = strToHash(parameters["タッチ設定"]);

    //- タッチ演出
    const keke_showTouchStar = toBoolean(parameters["タッチスター表示"]);
    const keke_touchStarDesign = strToHash(parameters["タッチスターデザイン"]);

    //- マウス操作
    const keke_mousePointerScroll = toBoolean(parameters["マウスポインタスクロール"]);
    const keke_pointerScrollSpeed = Number(parameters["…スクロール速度"]) || 1;

    //- 装備
    const keke_equipLayoutCustom = toBoolean(parameters["装備レイアウト改良"]);
    const keke_remEquipByShiftKey = toBoolean(parameters["シフトキーで装備解除"]);
    const keke_remEquipByLongTouch = toBoolean(parameters["ロングタッチで装備解除"]);
    const keke_delEquipCommand = toBoolean(parameters["装備コマンド削除"]);

    //- セーブ
    const keke_saveFocusNoNext = toBoolean(parameters["セーブフォーカス進めない"]);

    //- コマンド記憶
    const keke_memoryTiming = parameters["記憶タイミング"];
    const keke_memoryClearMethod = parameters["記憶クリア方式"];

    //- スクロールバー
    const keke_showScrollBar = toBoolean(parameters["スクロールバー表示"]);
    const keke_scrollBarDesign = strToHash(parameters["スクロールバーデザイン"]);

    //- 一覧モード
    const keke_validWideLookMode = toBoolean(parameters["一覧モード有効"]);
    const keke_wideLookModeAlways = toBoolean(parameters["常に一覧モード"]);
    const keke_wideLookWindowCfg = strToHash(parameters["一覧ウインドウ設定"]);

    //- 戦闘メンバー強調
    const keke_noReserveTranslucent = toBoolean(parameters["控え半透明化を無効"]);
    const keke_showBattlerMark = toBoolean(parameters["バトラーマーク表示"]);
    const keke_battlerMarkCfg = strToHash(parameters["バトラーマーク設定"]);

    //- アイコンバック
    const keke_showIconBack = toBoolean(parameters["アイコンバック表示"]);
    const keke_iconBackDesign = strToHash(parameters["アイコンバックデザイン"]);

    //- 競合対策
    const keke_toConflictScene = strToList(parameters["競合対策シーン"])

    parameters = null;
    
    
    
    //==================================================
    //--  プラグインコマンド
    //==================================================
    
    //- パーティをクリア
    PluginManager.registerCommand(pluginName, "パーティのクリア", args => {
        // パーティのクリア
        clearParty();
    });


    //- パーティを保存
    PluginManager.registerCommand(pluginName, "パーティのセーブ", args => {
        const slotStr = args["セーブスロット"];
        const slotId = slotStr ? Number(slotStr.match(/スロット(\d+)/i)[1]) : 0;
        // パーティの保存
        saveParty(slotId);
    });


    //- パーティを復元
    PluginManager.registerCommand(pluginName, "パーティのロード", args => {
        const slotStr = args["セーブスロット"];
        const slotId = slotStr ? Number(slotStr.match(/スロット(\d+)/i)[1]) : 0;
        // パーティの復元
        restoreParty(slotId);
    });


    //- パーティのクリア
    function clearParty() {
        $gameParty._actors = [];
        // パーティのリフレッシュ
        refreshParty();

    };
    

    //- パーティの保存
    function saveParty(slotId) {
        const gp = $gameParty;
        // アクターをIDに変換
        const actorIds = $gameParty._actors.concat();
        // スロットに格納
        if (!gp._partySavesKe) { gp._partySavesKe = []; }
        const saves = gp._partySavesKe;
        saves[slotId] = actorIds;
    };


    //- パーティの復元
    function restoreParty(slotId) {
        const gp = $gameParty;
        if (!gp._partySavesKe) { return; }
        // セーブを取得
        const save = gp._partySavesKe[slotId];
        if (!save) { return; }
        // アクターIDをアクタヘに変換
        $gameParty._actors = save.concat();
        // パーティのリフレッシュ
        refreshParty();
    };


    //- パーティのリフレッシュ
    function refreshParty() {
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
        $gameTemp.requestBattleRefresh();
    };
    
    

    //==================================================
    //--  共通開始
    //==================================================

    //- ウインドウベース/初期化(処理追加)
    const _Window_Base_initialize = Window_Base.prototype.initialize;
    Window_Base.prototype.initialize = function(rect) {
        _Window_Base_initialize.apply(this, arguments);
        // ハイドウインドウか判定
        setTimeout(checkHideWindow, 0, this);
    };

    //- ハイドウインドウか判定
    function checkHideWindow(windo) {
        if (!windo.visible) {
            windo._isHideWindowKe = true;
        }
    };


    //- シーンベース/形成(処理追加)
    const _Scene_Base_create = Scene_Base.prototype.create;
    Scene_Base.prototype.create = function() {
        _Scene_Base_create.apply(this);
        // キャンセルエリアの形成
        if (keke_touchCfg["メニュー以外にも適用"]) {
            createCancelArea(this);
        }
    };


    //- シーン・メニューベース/形成(処理追加)
    const _Scene_MenuBase_create = Scene_MenuBase.prototype.create;
    Scene_MenuBase.prototype.create = function() {
        _Scene_MenuBase_create.apply(this);
        // キャンセルエリアの形成
        if (!keke_touchCfg["メニュー以外にも適用"]) {
            createCancelArea(this);
        }
        // スライドエリアの形成
        createSlideArea(this);
        // コマンド記憶のクリア-メニュー開始
        clearCommandMemoryMenuStart();
    };
    
    
    
    //==================================================
    //--  共通更新
    //==================================================
    
    //- ウインドウ・スクローラブル/更新(処理追加)
    const _Window_Scrollable_update = Window_Scrollable.prototype.update;
    Window_Scrollable.prototype.update = function() {
        _Window_Scrollable_update.apply(this);
        // スクロールバーの更新
		updateScrollBar(this);
        // マウスポインタスクロール
        //mousePointerScroll(this);
    };


     //- シーンベース/更新(処理追加)
     const _Scene_Base_update = Scene_Base.prototype.update;
     Scene_Base.prototype.update = function() {
         _Scene_Base_update.apply(this);
         // キャンセルエリアの更新
         if (keke_touchCfg["メニュー以外にも適用"]) {
            updateCancelArea(this);
         }
     };


    //- シーン・メニューベース/更新(処理追加)
    const _Scene_MenuBase_update = Scene_MenuBase.prototype.update;
    Scene_MenuBase.prototype.update = function() {
        _Scene_MenuBase_update.apply(this);
        // キャンセルエリアの更新
        if (!keke_touchCfg["メニュー以外にも適用"]) {
            updateCancelArea(this);
        }
        // スライドエリアの更新
        updateSlideArea(this);
    };



    //==================================================
    //--  共通終了
    //==================================================

    //- スプライトの破棄
    function destroySprite(sprite) {
        if (!sprite) { return; }
        sprite.children.forEach(s => destroySprite(s));
        if (sprite.bitmap && !sprite.bitmap._url) { sprite.bitmap.destroy(); }
        if (sprite._texture) { sprite.destroy(); }
    };


    //- ウインドウスクローラブル/破棄(処理追加)
    const _Window_Scrollable_destroy = Window_Scrollable.prototype.destroy;
	Window_Scrollable.prototype.destroy = function() {
        // スクロールバーの破棄
        destroyScrollBar(this);
		_Window_Scrollable_destroy.apply(this);	
	};


    //- シーン。メニューベース/終了(処理追加)
    const _Scene_MenuBase_terminate = Scene_MenuBase.prototype.terminate;
    Scene_MenuBase.prototype.terminate = function() {
        _Scene_MenuBase_terminate.apply(this);
        // キャンセルエリアの破棄
        destroyCancelArea(this);
        // スライドエリアの破棄
        destroySlideArea(this);
    };



    //==================================================
    //--  共通処理
    //==================================================

    //- ウインドウ・メニューステータス/カーソル選択(処理追加)
    const _Window_MenuStatus_select = Window_MenuStatus.prototype.select;
    Window_MenuStatus.prototype.select = function(index) {
        _Window_MenuStatus_select.apply(this, arguments);
        // ステータスウインドウのカーソル同期
        this.synchroCursorStatusWindow(index);
        // 並べ替えドラッグ&ドロップの更新
        updatePendingDragAndDrop(this, index);
        // メニューアクターの記憶
        memorizeMenuActor(this, index);

    };


    //- シーンエクイップ/装備スロットの形成(処理追加)
    const _Scene_Equip_createSlotWindow = Scene_Equip.prototype.createSlotWindow;
    Scene_Equip.prototype.createSlotWindow = function() {
        _Scene_Equip_createSlotWindow.apply(this);
        // キャラ切り替え拡張
        if (keke_charaSlideExtend) {
            this._slotWindow.setHandler("pagedown", this.nextActor.bind(this));
            this._slotWindow.setHandler("pageup", this.previousActor.bind(this));
        }
        // シフトキーで装備解除
        if (keke_remEquipByShiftKey) {
            this._slotWindow.setHandler("shift", removeEquip.bind(this));
        }
    };


    //- ウインドウセレクタブル/決定の処理(処理追加)
    const _Window_Selectable_processOk = Window_Selectable.prototype.processOk;
    Window_Selectable.prototype.processOk = function() {
        // 連鎖スライドの終了
        endChainSlide();
        _Window_Selectable_processOk.apply(this);
    };


    //- ツクールMVか
    function isMv() {
        return typeof(ColorManager) == "undefined";
    };
    
    
    
    //==================================================
    //--  並べ替えドラッグ&ドロップ
    //==================================================

    //- シーンメニュー/並べ替え決定時の処理(半再定義)
    const _Scene_Menu_onFormationOk = Scene_Menu.prototype.onFormationOk;
    Scene_Menu.prototype.onFormationOk = function() {
        //- 並べ替えドラッグ&ドロップの処理
        if (processPendingDragAndDrop(this)) { return; }
        _Scene_Menu_onFormationOk.apply(this);
    };

    //- 並べ替えドラッグ&ドロップの処理
    function processPendingDragAndDrop(scene) {
        if (!keke_pendingDragAndDrop) { return false; }
        const index = scene._statusWindow.index();
        const pendingIndex = scene._statusWindow.pendingIndex();
        if (pendingIndex >= 0) {
            scene._statusWindow.setPendingIndex(-1);
        } else {
            scene._statusWindow.setPendingIndex(index);
        }
        scene._statusWindow.activate();
        return true;
    };


    //- 並べ替えドラッグ&ドロップの更新
    function updatePendingDragAndDrop(windo, index) {
        if (!keke_pendingDragAndDrop) { return false; }
        const pendingIndex = windo.pendingIndex();
        if (pendingIndex == null || pendingIndex < 0) { return; }
        if (index == pendingIndex) { return; }
        const scene = SceneManager._scene;
        // 隣なら入れ替え
        if (Math.abs(index - pendingIndex) <= 1) {
            $gameParty.swapOrder(index, pendingIndex); 
            scene._statusWindow.redrawItem(index);
            scene._statusWindow.redrawItem(pendingIndex);
        // 離れていたら挿入オーダー
        } else {
            insertOder(windo, index, pendingIndex);
        }
        // 並べ替えインデックスを更新
        scene._statusWindow.setPendingIndex(index);
    };

    //- 挿入オーダー
    function insertOder(windo, targetIndex, subjectIndex) {
        const gp = $gameParty;
        const actors = gp._actors;
        const subject = actors[subjectIndex];
        actors.remove(subject);
        actors.splice(targetIndex, 0, subject);
        $gamePlayer.refresh();
        windo.paint();
    };



    //==================================================
    //--  キャラ切り替え拡張
    //==================================================

    //- ウインドウセレクタプル/ハンドリングの処理(処理追加)
    const _Window_Selectable_processHandling = Window_Selectable.prototype.processHandling
    Window_Selectable.prototype.processHandling = function() {
        _Window_Selectable_processHandling.apply(this);
        // キャラ切り替え拡張
        if (!keke_charaSlideExtend || !canCharaSlide()) { return; }
        if (this._wheelWaitdown > 0) { this._wheelWaitdown--; }
        if (this._wheelWaitUp > 0) { this._wheelWaitUp--; }
        if (this.isOpenAndActive()) {
            if (!this.isHandled("left") && this.isHandled("pageup")) {
                let ok = false;
                // 左キー
                if (Input.isTriggered("left") && this.maxCols() == 1 && !isToConflictScene()) { ok = true; }
                // ホイール上
                if (TouchInput.wheelY > 0 && !this._wheelWaitUp) { ok = true; }
                if (ok) {
                    if (TouchInput.wheelY) { this._wheelWaitUp = WheelWait; }
                    return this.processPageup();
                }
            }
            if (!this.isHandled("right") && this.isHandled("pagedown")) {
                let ok = false;
                // 右キー
                if (Input.isTriggered("right") && this.maxCols() == 1 && !isToConflictScene()) { ok = true; }
                // ホイール下
                if (TouchInput.wheelY < 0 && !this._wheelWaitdown) { ok = true; }
                if (ok) {
                    if (TouchInput.wheelY) { this._wheelWaitdown = WheelWait; }
                    return this.processPagedown();
                }
            }
        }
    };


    //- ウインドウ・エクイップコマンド/カーソル左(処理追加)
    const _Window_EquipCommand_cursorLeft = Window_EquipCommand.prototype.cursorLeft;
    Window_EquipCommand.prototype.cursorLeft = function(wrap) {
        // 一番左の列なら
        if (keke_charaSlideExtend && (this._index % this.maxCols()) == 0) {
            // 前のキャラへ移動
            this.processPageup();
            return;
        }
        _Window_EquipCommand_cursorLeft.apply(this, arguments);
    };

    //- ウインドウ・エクイップコマンド/カーソル右(処理追加)
    const _Window_EquipCommand_cursorRight = Window_EquipCommand.prototype.cursorRight;
    Window_EquipCommand.prototype.cursorRight = function(wrap) {
        // 一番右の列なら
        if (keke_charaSlideExtend && (this._index % this.maxCols()) == this.maxCols() - 1) {
            // 次のキャラへ移動
            this.processPagedown();
            return;
        }
        _Window_EquipCommand_cursorRight.apply(this, arguments);
    };


    //- シーンスキル/項目ウインドウの形成(処理追加)
    const _Scene_Skill_createItemWindow = Scene_Skill.prototype.createItemWindow;
    Scene_Skill.prototype.createItemWindow = function() {
        _Scene_Skill_createItemWindow.apply(this);
        // スキルリストのキャラ切り替えをページ切り替えキーでも可能に
        this._itemWindow.setHandler("pagedown", this.nextActor.bind(this));
        this._itemWindow.setHandler("pageup", this.previousActor.bind(this));
    };



    //==================================================
    //--  リスト縦ループ
    //==================================================

    //- ウインドウセレクタブル/カーソルアップ(処理追加)
    const _Window_Selectable_cursorUp = Window_Selectable.prototype.cursorUp;
    Window_Selectable.prototype.cursorUp = function(wrap) {
        // カーソルアップ-ループ
        if (cursorUpLoop(this)) { return; };
        _Window_Selectable_cursorUp.apply(this, arguments);        
    };


    //- ウインドウセレクタブル/カーソルダウン(処理追加)
    const _Window_Selectable_cursorDown = Window_Selectable.prototype.cursorDown;
    Window_Selectable.prototype.cursorDown = function(wrap) {
        // カーソルダウン-ループ
        if (cursorDownLoop(this)) { return; };
        _Window_Selectable_cursorDown.apply(this, arguments);        
    };

    //- カーソル上-ループ
    function cursorUpLoop(windo) {
        if (!keke_listVerticalLoop) { return false; }
        const maxCols = windo.maxCols();
        // 1列ならリターン
        if (maxCols < 2) { return false; }
        const num = windo.maxItems();
        let i = windo._index;
        const col = i % maxCols;
        if (i - maxCols >= 0) { return false; }
        // カーソル移動
        i += num;
        while (!(i < num && i % maxCols == col)) {
            i--;
        }
        windo.smoothSelect(i);
        return true;
    };

    //- カーソル下-ループ
    function cursorDownLoop(windo) {
        if (!keke_listVerticalLoop) { return false; }
        const maxCols = windo.maxCols();
        // 1列ならリターン
        if (maxCols < 2) { return false; }
        const num = windo.maxItems();
        let i = windo._index;
        const col = i % maxCols;
        if (i + maxCols < num) { return false; }
        // カーソル移動
        i -= num;
        while (!(i >= 0 && i % maxCols == col)) {
            i++;
        }
        windo.smoothSelect(i);
        return true;
    };



    //==================================================
    //--  リスト左右ループ
    //==================================================

    //- ウインドウセレクタブル/カーソルレフト(処理追加)
    const _Window_Selectable_cursorLeft = Window_Selectable.prototype.cursorLeft;
    Window_Selectable.prototype.cursorLeft = function(wrap) {
        // カーソルジャンプ-左
        if (cursorJumpLeft(this)) { return; }
        // カーソルレフト-ループ
        if (cursorLeftLoop(this, wrap)) { return; }
        _Window_Selectable_cursorLeft.apply(this, arguments);        
    };


    //- ウインドウセレクタブル/カーソルライト(処理追加)
    const _Window_Selectable_cursorRight = Window_Selectable.prototype.cursorRight;
    Window_Selectable.prototype.cursorRight = function(wrap) {
        // カーソルジャンプ-右
        if (cursorJumpRight(this)) { return; }
        // カーソルライト-ループ
        if (cursorRightLoop(this, wrap)) { return; }
        _Window_Selectable_cursorRight.apply(this, arguments);        
    };

    //- カーソル左-ループ
    function cursorLeftLoop(windo, wrap) {
        if (!keke_listHorizontalLoop) { return false; }
        const maxCols = windo.maxCols();
        // 1列ならリターン
        if (maxCols < 2) { return false; }
        const num = windo.maxItems();
        let i = windo._index;
        // カーソル移動
        if (i - 1 >= 0) { return false; }
        if (wrap && windo.isHorizontal()) { return false; }
        i += num;
        while (!(i < num)) {
            i--;
        }
        windo.smoothSelect(i);
        return true;
    };

    //- カーソル右-ループ
    function cursorRightLoop(windo, wrap) {
        if (!keke_listHorizontalLoop) { return false; }
        const maxCols = windo.maxCols();
        // 1列ならリターン
        if (maxCols < 2) { return false; }
        const num = windo.maxItems();
        let i = windo._index;
        if (i + 1 < num) { return false; }
        if (wrap && windo.isHorizontal()) { return false; }
        // カーソル移動
        i -= num;
        while (!(i >= 0)) {
            i++;
        }
        windo.smoothSelect(i);
        return true;
    };



    //==================================================
    //--  リスト左右キーでジャンプ
    //==================================================

    //- カーソルジャンプ-左
    function cursorJumpLeft(windo) {
        if (!keke_listLRJump) { return false; }
        const maxCols = windo.maxCols();
        // 1列でなければリターン
        if (maxCols >= 2) { return false; }
        // カーソルページアップ
        windo.cursorPageup();
        return true;
    };

    //- カーソルジャンプ-右
    function cursorJumpRight(windo) {
        if (!keke_listLRJump) { return false; }
        const maxCols = windo.maxCols();
        // 1列でなければリターン
        if (maxCols >= 2) { return false; }
        // カーソルページダウン
        windo.cursorPagedown();
        return true;
    };



    //==================================================
    //--  タッチインプットの共通処理
    //==================================================

    //- タッチインプット/クリア(処理追加)
    const _TouchInput_clear = TouchInput.clear;
    TouchInput.clear = function() {
        _TouchInput_clear.apply(this);
        // ロングタッチカウント
        this._pressedTimeKeMncf = keke_touchCfg["ロングタッチ時間"] || 15;
        // ロングタッチ済みフラグ
        this._longTouchedKeMncf = false;
        // ロングタッチ回避フラグ
        this._noLongTouchKeMncf = false;
        // タッチタイプ
        this._touchTypeKe = null;
    };


    //- タッチインプット/更新(処理追加)
    const _TouchInput_update = TouchInput.update;
    TouchInput.update = function() {
        _TouchInput_update.apply(this);
        // 追加ロングタッチの更新
        updateLongTouchEx(this);
        // タッチタイプの消去
        delTouchType(this);
    };


    //- タッチインプット/決定時の処理(処理追加)
    const _TouchInput_onTrigger = TouchInput._onTrigger;
    TouchInput._onTrigger = function(x, y) {
        _TouchInput_onTrigger.apply(this, arguments);
        // タッチタイプを保存
        this._touchTypeKe = { type:this._mousePressed ? "mouse" : this._screenPressed ? "screen" : "", del:false };
    };


    //- タッチインプット/リリース時の処理(処理追加)
    const _TouchInput_onRelease = TouchInput._onRelease;
    TouchInput._onRelease = function(x, y) {
        // ロングタッチ回避フラグをオフ
        this._noLongTouchKeMncf = false;
        // ロングタッチ済みならリリース処理をしない
        if (!this._longTouchedKeMncf) {
            _TouchInput_onRelease.apply(this, arguments);
        }
        // タッチタイプの消去
        delTouchType(this);
    };


     //- タッチタイプの消去
     function delTouchType(touch) {
        if (!touch._touchTypeKe) { return; }
        if (touch._touchTypeKe.del) {
            touch._touchTypeKe = null;
        };
    };


    //- ウインドウセレクタブル/タッチの処理(処理追加)
    const _Window_Selectable_processTouch = Window_Selectable.prototype.processTouch;
    Window_Selectable.prototype.processTouch = function() {
        if (isSwiping()) { return; }
        _Window_Selectable_processTouch.apply(this);
        // シングルタッチで決定の処理
        if (processSingleTouchOk(this)) { return; };
        // ダイレクトタッチの処理
        processDirectTouch(this);
        // ロングタッチセレクトの処理
        processLongTouchSelect(this);
    };


    //- 画面タッチしたか
    function isScreenTouched() {
        const touchType = TouchInput._touchTypeKe;
        return touchType && touchType.type == "screen";
    };



    //==================================================
    //--  アクティブウインドウの保存
    //==================================================
    
    //- ウインドウセレクタブル/アクティブ化(処理追加)
    const _Window_Selectable_activate = Window_Selectable.prototype.activate;
    Window_Selectable.prototype.activate = function() {
        _Window_Selectable_activate.apply(this);
        // アクティブウインドウの保存
        saveActiveWindow(this);
    };

    // アクティブウインドウの保存
    function saveActiveWindow(windo) {
        const scene = SceneManager._scene;
        if (!scene._activeWindowsKeMncf) { scene._activeWindowsKeMncf = []; }
        const actives = scene._activeWindowsKeMncf;
        if (actives.find(saveWindow => saveWindow == windo)) { return; }
        actives.push(windo);
    };


    //- ウインドウセレクタブル/非アクティブ化(処理追加)
    const _Window_Selectable_deactivate = Window_Selectable.prototype.deactivate;
    Window_Selectable.prototype.deactivate = function() {
        _Window_Selectable_deactivate.apply(this);
        // アクティブウインドウの保存削除
        delActiveWindowSave(this);
    };

    // アクティブウインドウ保存の削除
    function delActiveWindowSave(windo) {
        const scene = SceneManager._scene;
        if (!scene._activeWindowsKeMncf) { return; }
        const actives = scene._activeWindowsKeMncf;
        scene._activeWindowsKeMncf = actives.filter(saveWindow => saveWindow != windo);
    };


    // アクティブウインドウの終了
    function endActiveWindow(windo) {
        const scene = SceneManager._scene;
        if (!scene._activeWindowsKeMncf) { return; }
        const actives = scene._activeWindowsKeMncf;
        // 全ての保存ウインドウを処理
        let stop = false;
        let del = false;
        actives.forEach((saveWindow, i) => {
            if (saveWindow == windo) { return; }
            // 保存ウインドウがコマンド系なら
            if (saveWindow instanceof Window_Command) {
                // メニューコマンドの終了処理
                if (saveWindow.constructor.name == "Window_MenuCommand") {
                    stop = endMenuCommand(saveWindow);
                // 装備コマンドの終了処理
                } else if (saveWindow.constructor.name == "Window_EquipCommand") {
                    endEquipCommand(saveWindow, windo);
                // それ以外は決定
                } else {
                    saveWindow.processOk();
                }
            // それ以外はキャンセル
            } else {
                saveWindow.processCancel();
            }
            if (stop) { return; }
            // 非アクティプ化
            saveWindow.active = false;
            actives[i] = null;
            del = true;
        });
        // null を消去
        if (del) {
            scene._activeWindowsKeMncf = actives.filter(w => w);
        }
        return stop;
    };

    //- メニューコマンドの終了処理
    function endMenuCommand(commandWindow) {
        const symbol = commandWindow.currentSymbol();
        let stop = false;
        // キャラ選択のあるコマンドなら決定
        if (symbol.match(/skill|equip|status|formation/i)) {
            commandWindow.processOk();
        } else {
            stop = true;
        }
        return stop;
    };

    //- 装備コマンドの終了処理
    function endEquipCommand(commandWindow, newWindow) {
        if (newWindow.constructor.name != "Window_EquipSlot") { return; }
        const equipIndex = commandWindow._list.findIndex(d => d.symbol == "equip");
        commandWindow.select(equipIndex);
        commandWindow.processOk();
    };

    //- ハイドウインドウがアクティブか
    function isHideWindowActive(subjectWindow) {
        const scene = SceneManager._scene;
        if (!scene._activeWindowsKeMncf) { return false; }
        const actives = scene._activeWindowsKeMncf;
        let ok = false;
        for (const saveWindow of actives) {
            if (saveWindow == subjectWindow) { continue; }
            if (saveWindow._isHideWindowKe) {
                ok = true;
                break;
            }
        };
        return ok;
    };



    //==================================================
    //--  シングルタッチで決定
    //==================================================

    //- ウインドウセレクタブル/タッチ選択時の処理(処理追加)
    const _Window_Selectable_onTouchSelect = Window_Selectable.prototype.onTouchSelect;
    Window_Selectable.prototype.onTouchSelect = function(trigger) {
        // シングルタッチで決定時は無効
        if (keke_singleTouchOk && isScreenTouched()) { return; }
        _Window_Selectable_onTouchSelect.apply(this, arguments);
    };

    //- シングルタッチで決定の処理
    function processSingleTouchOk(windo) {
        if (!keke_singleTouchOk) { return false; }
        // 画面タッチでなければリターン
        if (!isScreenTouched()) { return false; }
        // 各種条件
        if (!windo.isOpenAndActive()) { return false; }
        if (!windo.isCursorMovable()) { return false; }
        if (!TouchInput.isClicked()) { return false; }
        const hitIndex = windo.hitIndex();
        if (hitIndex >= 0) {
            // セレクト&決定処理
            processSelectAndOk(windo, hitIndex);
            return true;
        }
        return false;
    };

    //- セレクト&決定処理
    function processSelectAndOk(windo, index) {
        windo.select(index);
        windo.processOk();
    };


    //- ウインドウ・アイテムリスト/アイテムリストの作成(処理追加)
    const _Window_ItemList_makeItemList = Window_ItemList.prototype.makeItemList;
    Window_ItemList.prototype.makeItemList = function() {
        _Window_ItemList_makeItemList.apply(this);
        //- 再セレクトラスト
        if (keke_singleTouchOk && this._active != null && this._index != -1) {
            this.selectLast();
        }
    };

    //- ウインドウ・スキルリスト/アイテムリストの作成(処理追加)
    const _Window_SkillList_makeItemList = Window_SkillList.prototype.makeItemList;
    Window_SkillList.prototype.makeItemList = function() {
        _Window_SkillList_makeItemList.apply(this);
        // 再セレクトラスト
        if (keke_singleTouchOk && this._active != null && this._index != -1) {
            this.selectLast();
        }
    };



    //==================================================
    //--  ダイレクトタッチ
    //==================================================

    //- ダイレクトタッチの処理
    function processDirectTouch(windo) {
        if (!keke_directTouch || !isDirectTouchScene()) { return; }
        if (!windo.isOpen() || !windo.visible || windo.active) { return; }
        // ハイドウインドウがアクティブならリターン
        if (isHideWindowActive(windo)) { return; }
        if (!TouchInput.isClicked()) { return; }
        // 競合対策シーンならリターン
        if (isToConflictScene()) { return; }
        // タッチ位置を選択
        const hitIndex = windo.hitIndex();
        if (hitIndex < 0) { return; }
        // ダイレクトタッチ中フラグをオン
        InDirectTouch = true;
        // アクティブウインドウの終了
        const stop = endActiveWindow(windo);
        // 実行
        if (!stop) {
            windo.select(hitIndex);
            windo.processOk();
            // コマンド系をダイレクトタッチしたら
            if (windo instanceof Window_Command) {
                // ヘルプの消去
                clearHelp();
            }
        }
        // ダイレクトタッチ中フラグをオフ
        InDirectTouch = false;
    };

    //- ダレイクトタッチ有効シーンか
    function isDirectTouchScene() {
        const scene = SceneManager._scene;
        if (scene.constructor.name == "Scene_Status") { return false; }
        return true;
    };

    //- 競合対策シーンか
    function isToConflictScene() {
        const sceneName = SceneManager._scene.constructor.name;
        for (let name of keke_toConflictScene) {
            if (!name) { continue; }
            name = (name.match(/^Scene_/i) ? name : "Scene_" + name).toUpperCase();
            if (sceneName.toUpperCase() == name) { return true; }
        };
        return false;
    };

    //- ヘルプの消去
    function clearHelp() {
        const scene = SceneManager._scene;
        const helpWindow = scene._helpWindow;
        if (!helpWindow) { return; }
        helpWindow.clear();
    };



    //==================================================
    //--  キャンセル省略
    //==================================================

    //- シーンアイテム/項目キャンセル時の処理(処理追加)
    const _Scene_Item_onItemCancel = Scene_Item.prototype.onItemCancel;
    Scene_Item.prototype.onItemCancel = function() {
        // 処理を省略
        if (keke_cancelOmit && isTouchishMode() && !InDirectTouch  && !InLongTouchSelect) {
            this.popScene();
            return;
        }
        _Scene_Item_onItemCancel.apply(this);
    };

    //- シーンスキル/項目キャンセル時の処理(処理追加)
    const _Scene_Skill_onItemCancel = Scene_Skill.prototype.onItemCancel;
    Scene_Skill.prototype.onItemCancel = function() {
        // 処理を省略
        if (keke_cancelOmit && isTouchishMode() && !InDirectTouch  && !InLongTouchSelect) {
            this.popScene();
            return;
        }
        _Scene_Skill_onItemCancel.apply(this);
    };



    //==================================================
    //--  追加ロングタッチ
    //==================================================

    //- 追加ロングタッチの更新
    function updateLongTouchEx(touch) {
        if (!canLongTouchCancel(touch)) { return; }
        // タッチ中
        if (touch.isPressed() && !touch._noLongTouchKeMncf) {
            touch._pressedTimeKeMncf--;
            // ロングタッチ時間が経過したら
            if (touch._pressedTimeKeMncf <= 0) {
                // ロングタッチをオン
                touch._newState.longTouchedExKe = true;
                // カウントを再開
                touch._pressedTimeKeMncf = keke_touchCfg["ロングタッチ時間"];
                // ロングタッチ済みフラグをオン
                touch._longTouchedKeMncf = true;
            }
        // 非タッチ中
        } else {
            touch._pressedTimeKeMncf = keke_touchCfg["ロングタッチ時間"];
            // ロングタッチ済みフラグをオフ
            touch._longTouchedKeMncf = false;
        }
    };

    //- ロングタッチセレクト可能か
    function canLongTouchCancel(touch) {
        if (!keke_longTouchSelect) { return false; }
        const scene = SceneManager._scene;
        // シーン判定
        let ok = false;
        if (scene instanceof Scene_MenuBase) { ok = true; }
        if (scene instanceof Scene_Battle) { ok = true; }
        if (!ok) {
            // ロングタッチ済みフラグをオフ
            touch._longTouchedKeMncf = false;
            return false;
        }
        return true;
    };

    //- 追加ロングタッチしたか
    function isLongTouchEx() {
        return TouchInput._currentState.longTouchedExKe;
    };


    //- タッチインプット/移動時の処理(処理追加)
    const _TouchInput_onMove = TouchInput._onMove;
    TouchInput._onMove = function(x, y) {
        _TouchInput_onMove.apply(this, arguments);
        // ロングタッチの処理
        if (this._moved) {
            // ロングタッチ回避フラグをオン
            this._noLongTouchKeMncf = true;
            // ロングタッチカウントを初期化
            this._pressedTimeKeMncf = keke_touchCfg["ロングタッチ時間"];
        }
    };



    //==================================================
    //--  ロングタッチセレクト
    //==================================================

    //- ロングタッチセレクトの処理
    function processLongTouchSelect(windo) {
        if (!keke_longTouchSelect) { return; }
        if (!windo.isOpen() || !windo.visible) { return; }
        // ハイドウインドウがアクティブならリターン
        if (isHideWindowActive(windo)) { return; }
        if (!isLongTouchEx()) { return; }
        // タッチ位置を選択
        const hitIndex = windo.hitIndex();
        if (hitIndex < 0) { return; }
        // ロングタッチセレクト中フラグをオン
        InLongTouchSelect = true;
        // アクティブウインドウの終了
        const stop = endActiveWindow(windo);
        if (!stop) {
            // カーソルを合わせる
            windo.select(hitIndex);
            // コマンド系をセレクトしたら
            if (windo instanceof Window_Command) {
                // ヘルプの消去
                clearHelp();
            }
        }
        // ロングタッチで装備解除
        removeEquipByLongTouch(windo);
        // ロングタッチセレクト中フラグをオフ
        InLongTouchSelect = false;
    };

    //- ロングタッチで装備解除
    function removeEquipByLongTouch(windo) {
        if (!keke_remEquipByLongTouch) { return; }
        if (SceneManager._scene.constructor.name != "Scene_Equip") { return; }
        if (windo.constructor.name != "Window_EquipSlot") { return; }
        // 装備の解除
        removeEquip();
    };


    //- ウインドウセレクタブル/決定音の演奏(処理追加)
    const _Window_Selectable_playOkSound = Window_Selectable.prototype.playOkSound;
    Window_Selectable.prototype.playOkSound = function() {
        // ロングタッチセレクト時は決定音無
        if (InLongTouchSelect) { return; }
        _Window_Selectable_playOkSound.apply(this);
    };

    //- シーンマネージャー/キャンセル音の演奏(処理追加)
    const _SoundManager_playCancel = SoundManager.playCancel;
    SoundManager.playCancel = function() {
        // ロングタッチセレクト・ダイレクトタッチ時はキャンセル音無効
        if (InDirectTouch || InLongTouchSelect) { return; }
        _SoundManager_playCancel.apply(this);
    };



    //==================================================
    //--  スワイプキャンセル
    //==================================================

    //- キャンセルエリアの形成
    function createCancelArea(scene) {
        if (!keke_swipeCancel) { return; }
        const width = keke_touchCfg["キャンセルエリア幅"] || 50;
        const height = Graphics.height;
        scene._cancelAreaSpritesKe = [];
        // 左キャンセルエリアの形成
        const leftArea = createAreaSprite(scene, width, height);
        leftArea.x = 0;
        leftArea.y = 0;
        // 右キャンセルエリアの形成
        const rightArea = createAreaSprite(scene, width, height);
        rightArea.x = Graphics.width - width;
        rightArea.y = 0;
        // 変数にセット
        scene._cancelAreaSpritesKe.push(leftArea);
        scene._cancelAreaSpritesKe.push(rightArea);
    };

    //- エリアスプライトの形成
    function createAreaSprite(scene, width, height) {
        // ビットマップ形成
        const bitmap = new Bitmap(width, height);
        // スプライト形成
        const sprite = new Sprite_ClickableKeMncf();
        sprite.bitmap = bitmap;
        // 描画
        //bitmap.fillRect(0, 0, width, height, "rgba(0, 0, 0, 0.25");
        // チルド
        scene.addChild(sprite);
        // スワイプパラムの初期化
        initSwipeParam(sprite);
        return sprite;
    };


    //- キャンセルエリアの更新
    function updateCancelArea(scene) {
        if (!keke_swipeCancel) { return; }
        if (!scene._cancelAreaSpritesKe) { return; }
        if (isSwipingSlide()) { return; }
        const areaSprites = scene._cancelAreaSpritesKe;
        // 左右のエリアを処理
        areaSprites.forEach(areaSprite => {
            // エリアスプライトの更新
            updateAreaSprite(scene, areaSprite, doCancel, "cancel", keke_touchCfg["キャンセル遊び"]);
        });
    };

    //- スライドスワイプ中か
    function isSwipingSlide() {
        return $gameTemp._isSwipingKeMncf == "slide";
    };

    //- エリアスプライトの更新
    function updateAreaSprite(scene, areaSprite, handler, type, play) {
        const p = areaSprite._swipeParamKe;
        if (!p) { return; }
        // タッチスワイプの更新
        const swiped = updateTouchSwipe(areaSprite, p);
        // スワイプXがあったら
        if (swiped && p.swipeX) {
            play = play || 10;
            // スワイプ合計を加算
            p.swipeTotalX += Math.abs(p.swipeX);
            p.swipeTotalY += Math.abs(p.swipeY);
            p.swipeDireX += p.swipeX;
            // X合計が一定値でスワイプ済みフラグ
            if (p.swipeTotalX >= play && p.swipeTotalX > p.swipeTotalY) {
                p.xSwiped= true;
            }
            // Y合計が上回ったらスワイプ済みを解除
            if (p.swipeTotalY >= play && p.swipeTotalY > p.swipeTotalX) {
                p.xSwiped= false;
                p.swipeDireX = 0;
                // スワイプ中フラグをオフ
                offSwipingFlag();
            }
            // タッチスター作成-エリア
            if (p.xSwiped) {
                makeTouchStar_area(areaSprite);
                // スワイプ中フラグをオン
                onSwipingFlag(type);
            }
        // なかったら合計を初期化
        } else if (!p.swipeY) {
            p.swipeTotalX = 0;
            p.swipeTotalY = 0;
        }
        // スワイプ済みでタッチリリースしたらハンドラ実行
        if (p.xSwiped && TouchInput.isReleased()) {
            handler(scene, p.swipeDireX);
            p.xSwiped= false;
            p.swipeDireX = 0;
            // スワイプ中フラグをオフ
            offSwipingFlag();
        }
        // タッチスター更新-エリア
        updateTouchStar_area(areaSprite);
    };

    //- キャンセルの実行
    function doCancel() {
        TouchInput._newState.cancelled = true;
    };

    //- タッチスター作成-エリア
    function makeTouchStar_area(areaSprite, maxScale) {
        if (!keke_showTouchStar) { return; }
        const x = TouchInput.x;
        const y = TouchInput.y;
        // タッチスターの作成
        makeTouchStar(areaSprite, x, y, maxScale);
    };

    //- タッチスター更新-エリア
    function updateTouchStar_area(areaSprite) {
        if (!keke_showTouchStar) { return; }
        // タッチスターの更新
        updateTouchStar(areaSprite);
        // タッチスタースプライトの更新
        updateTouchStarSprite(areaSprite);
    };


    //- キャンセルエリアの破棄
    function destroyCancelArea(scene) {
        if (!scene._cancelAreaSpritesKe) { return; }
        scene._cancelAreaSpritesKe.forEach(areaSprite => {
            // タッチスターの破棄
            destroyTouchStar(areaSprite);
            destroySprite(areaSprite);
        });
        scene._cancelAreaSpritesKe = null;
    };


    //- スワイプ中フラグをオン
    function onSwipingFlag(type) {
        $gameTemp._isSwipingKeMncf = type;
    };

    //- スワイプ中フラグをオフ
    function offSwipingFlag() {
        $gameTemp._isSwipingKeMncf = null;
    };


    //- スワイプ中か
    function isSwiping() {
        return $gameTemp._isSwipingKeMncf;
    };

    //- キャンセルスワイプ中か
    function isSwipingCancel() {
        return $gameTemp._isSwipingKeMncf == "cancel";
    };


    //- ウインドウセレクタブル/タッチスクロールの処理(処理追加)
    const _Window_Selectable_processTouchScroll = Window_Selectable.prototype.processTouchScroll;
    Window_Selectable.prototype.processTouchScroll = function() {
        // スワイプ中は無効
        if (isSwiping()) { return; }
        _Window_Selectable_processTouchScroll.apply(this);
    };

    //- ゲームプレイヤー/タッチ移動(処理追加)
    const _Game_Player_moveByInput = Game_Player.prototype.moveByInput;
    Game_Player.prototype.moveByInput = function() {
        // スワイプ中は無効
        if (isSwiping()) {
            $gameTemp.clearDestination();
            return;
        }
        _Game_Player_moveByInput.apply(this);
    };



    //==================================================
    //--  スワイプスライド
    //==================================================

    //- スライドエリアの形成
    function createSlideArea(scene) {
        if (!keke_swipeSlide) { return; }
        if (!needsSlideArea(scene)) { return; }
        const width = keke_touchCfg["スライドエリア幅"] || 100;
        const height = Graphics.height;
        scene._cancelAreaSpriteKe = [];
        // スライドエリアの形成
        const slideArea = createAreaSprite(scene, width, height);
        slideArea.x = Graphics.width / 2 - width / 2;
        slideArea.y = 0;
        // 変数にセット
        scene._slideAreaSpriteKe = slideArea;
    };

    //- スライドエリアが必要か
    function needsSlideArea(scene) {
        if (canCharaSlide(scene)) { return true; }
        if (isWideLookAlways(scene)) { return false; }
        if (isValidWideLookMode(scene)) { return true; }
        return false;
    };


    //- スライドエリアの更新
    function updateSlideArea(scene) {
        if (!keke_swipeSlide) { return; }
        if (!scene._slideAreaSpriteKe) { return; }
        if (isSwipingCancel()) { return; }
        const areaSprite = scene._slideAreaSpriteKe;
        // エリアスプライトの更新
        updateAreaSprite(scene, areaSprite, doSlide, "slide", keke_touchCfg["スライド遊び"]);
        // 連鎖スライドの更新
        updateChainSlide(scene, areaSprite);
    };

    //- スライドの実行
    function doSlide(scene, direX) {
        // キャラスライド
        if (canCharaSlide(scene)) {
            charaSlide(scene, direX);
        }
        // 一覧モードの切り替え
        if (isValidWideLookMode(scene)) {
            switchWideLookMode(scene);
        }
        // 連続スライドの開始
        startChainSlide(scene, direX);
    };

    //- キャラスライド
    function charaSlide(scene, direX) {
        // 左
        if (direX < 0) {
            scene.previousActor(scene);
        }
        // 右
        if (direX > 0) {
            scene.nextActor(scene);
        }
    };

    //- 連鎖スライドの開始
    function startChainSlide(scene, direX) {
        // キャラ切り替え時以外は無効
        if (!canCharaSlide(scene)) { return; }
        const count = keke_touchCfg["連鎖スライド時間"] || 0; 
        scene._swipeChainSlideKeMncf = { count:count, direX:direX };
    };

    //- 連鎖スライドの更新
    function updateChainSlide(scene, areaSprite) {
        const chain = scene._swipeChainSlideKeMncf;
        if (!chain) { return; }
        // 連続スライドの受け付け
        if (TouchInput.isClicked()) {
            // スライドの実行
            doSlide(scene, chain.direX);
            // タッチスターの作成-エリア
            makeTouchStar_area(areaSprite, 1.5);
        }
        // カウント処理
        if (chain.count) {
            chain.count--;
            if (chain.count <= 0) { endChainSlide(); }
        }
    };

    //- 連鎖スライドの終了
    function endChainSlide() {
        SceneManager._scene._swipeChainSlideKeMncf = null;
    };


    //- スライドエリアの破棄
    function destroySlideArea(scene) {
        if (!scene._slideAreaSpriteKe) { return; }
        const areaSprite = scene._slideAreaSpriteKe;
        // タッチスターの破棄
        destroyTouchStar(areaSprite);
        destroySprite(areaSprite);
        scene._slideAreaSpriteKe = null;
    };

    //- キャラ切り替え可能か
    function canCharaSlide(scene) {
        scene = scene || SceneManager._scene;
        return scene.needsPageButtons && scene.needsPageButtons();
    };



    //==================================================
    //--  タッチスター
    //==================================================

    //- タッチスターの作成
    function makeTouchStar(sprite, x, y, maxScale = 1) {
        if (!sprite._touchStarsKe) { sprite._touchStarsKe = []; }
        const star = keke_touchStarDesign;
        const stars = sprite._touchStarsKe;
        const num = star["生成数"] || 2;
        let rate = 0;
        if (num > 1 && stars.length >= 1) {
            const preStar = stars[stars.length - 1];
            for (let i = 1; i < num; i++) {
                rate = num - i;
                if (rate < 1) {
                    if (Math.random() >= rate) { continue; }
                }
                // タッチスターの作成-個別
                makeTouchStarEach(sprite, star, x, y, maxScale, preStar, num, i);
            }
        }
        if (num < 1) {
            if (Math.random() >= num) { return; }
        }
        // タッチスターの作成-個別
        makeTouchStarEach(sprite, star, x, y, maxScale);
    };
    
    //- タッチスターの作成-個別
    function makeTouchStarEach(sprite, star, x, y, maxScale, preStar, num, i) {
        const tw = $gameMap.tileWidth();
        const th = $gameMap.tileHeight();
        // ボックス作成
        const box = {};
        box.timeMax = makeTime(star["持続時間"]) || 30;
        box.dura = 0;
        box.transTime = 2;
        box.endTime = makeTime(star["消えていく時間"]) || 30;
        box.form = star["フォーム"] || "スター(星形)";
        box.w = randomize(star["サイズ"] || 20, star["サイズ-乱数"] || 5, "center");
        box.round = box.w / 3;
        const opa = Math.round(randomize(star["不透明度"] || 192, star["不透明度-乱数"] || 32, "center"));
        box.color = star["カラー"] || "rgba(255, 255, 0)";
        box.startX = x + (star["位置X"] || 0);
        box.startY = y + (star["位置Y"] || 0);
        box.startScaleX = randomize(star["スケールX"] || 1.5, star["スケールX-乱数"] || 0.5, "center");
        box.startScaleY = randomize(star["スケールY"] || 1.5, star["スケールY-乱数"] || 0.5, "center");
        box.startOpacity = opa;
        box.moveX = randomize(star["移動X"] || 0, star["移動X-乱数"] || 0, "center") / tw;
        box.moveY = randomize(star["移動Y"] || 0, star["移動Y-乱数"] || 0, "min") / th;
        box.scalingX = randomize(star["拡大量"] || 2, star["拡大量-乱数"] || 0.5, "center") * maxScale;
        box.scalingY = randomize(star["拡大量"] || 2, star["拡大量-乱数"] || 0.5, "center") * maxScale;
        // 複数生成時の処理
        if (preStar) {
            const preX = preStar.x;
            const preY = preStar.y;
            box.startX = preX + (box.startX - preX) / num * i;
            box.startY = preY + (box.startY - preY) / num * i;
        }
        box.x = box.startX;
        box.y = box.startY;
        box.scaleX = box.startScaleX;
        box.scaleY = box.startScaleY;
        box.opacity = 0;
        box.on = true;
        if (i == 0) { box.updateWait = star["更新ウェイト"] || 0; }
        // 変数にセット
        sprite._touchStarsKe.push(box);
    };
    
    //- ランダム化
    function randomize(val, rdm, type) {
        if (type == "center") {
            const start = val - rdm;
            return start + Math.random() * rdm * 2;
        } else if (type == "min") {
            const start = val;
            return start + Math.random() * rdm;
        } else if (type == "max") {
            const start = val;
            return start - Math.random() * rdm;
        }
    };
    
    
    //- タッチスターの更新
    function updateTouchStar(sprite) {
        if (!sprite._touchStarsKe || !sprite._touchStarsKe.length) { return; }
        const stars = sprite._touchStarsKe;
        let del = false;
        // データを全て処理
        stars.forEach((b, i) => {
            if (!b) { return; }
            b.dura++
            // 移動
            b.x = b.startX + (Math.sin(Math.PI * (b.dura / b.timeMax * 1 + 1.5)) * b.moveX + b.moveX) / 2;
            b.y = b.startY + (Math.sin(Math.PI * (b.dura / b.timeMax * 1 + 1.5)) * b.moveY + b.moveY) / 2;
            // スケール
            b.scaleX = b.startScaleX + (Math.sin(Math.PI * (b.dura / b.timeMax * 1 + 1.5)) * b.scalingX + b.scalingX) / 2;
            b.scaleY = b.startScaleY + (Math.sin(Math.PI * (b.dura / b.timeMax * 1 + 1.5)) * b.scalingY + b.scalingY) / 2;
            // 不透明度・出現
            if (b.dura == b.transTime) {
                b.opacity = b.startOpacity;
            }
            // 不透明度・消える
            if (b.dura >= b.timeMax - b.endTime) {
                const overTime = b.dura - (b.timeMax - b.endTime);
                b.opacity = b.startOpacity - (Math.sin(Math.PI * (overTime / b.endTime * 1 + 1.5)) * b.startOpacity + b.startOpacity) / 2;
            }
            // 終了
            if (b.dura >= b.timeMax) {
                stars[i] = null;
                sprite._delsStarKe = true;
                del = true;
            }
        });
        // null を消去
        if (del) { sprite._touchStarsKe = stars.filter(b => b); }
    };
    

    //- タッチスタースプライトの更新
    function updateTouchStarSprite(sprite) {
        const stars = sprite._touchStarsKe;
        if (!stars || !stars.length) { return; }
        // 更新ウェイト
        if (sprite._updateWaitDashKeAcms) {
            sprite._updateWaitDashKeAcms--;
            return;
        }
        if (!sprite._touchStarSpritesKe) { sprite._touchStarSpritesKe = []; }
        const starSprites = sprite._touchStarSpritesKe;
        // スプライトを全て処理
        stars.forEach((b, i) => {
            if (!b) { return }
            // タッチスタースプライトの形成
            createTouchStarSprite(starSprites, i, b);
            // タッチスタースプライトのパラメータ更新
            updateTouchStarSpriteParams(starSprites, i, b);
        });
        // 余ったスプライトを隠す
        if (sprite._delsStarKe && starSprites.length > stars.length) {
            for (i = stars.length; i < starSprites.length; i++) {
                // タッチスタースプライトの見えない化
                hideTouchStarSprite(starSprites, i);
            }
            sprite._delsStarKe = false;
        }
        // 更新ウェイトをセット
        sprite._updateWaitDashKeAcms = stars[0].updateWait;
    };
    
    //- タッチスタースプライトの形成
    function createTouchStarSprite(starSprites, i, b) {
        if (starSprites[i]) { return; }
        // ビットマップ描画
        const w = b.w;
        const bitmap = new Bitmap(w, w);
        // スプライト形成
        const sprite = new SpriteKeMncf(bitmap);
        // 描画
        if (b.form == "スクエア(四角形)") {
            fillSquare(bitmap, 0, 0, w, w, b.color, 0, b.round);
        } else if (b.form == "サークル(円形") {
            bitmap.drawCircle(w / 2, w / 2, w / 2, b.color);
        } else if (b.form == "スター(星形)") {
            fillGiza(bitmap, 0, 0, w, w, b.color, 1);
        }
        // チルド
        const scene = SceneManager._scene;
        scene.addChild(sprite);
        // 変数にセット
        starSprites[i] = sprite;
        // アンカー
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
    };
    
    //- タッチスタースプライトのパラメータ更新
    function updateTouchStarSpriteParams(starSprites, i, b) {
        if (!starSprites[i]) { return; }
        const sprite = starSprites[i];
        sprite.x = b.x;
        sprite.y = b.y;
        sprite.scale.x = b.scaleX;
        sprite.scale.y = b.scaleY;
        sprite.opacity = b.opacity;
    };
    
    //- タッチスタースプライトの見えない化
    function hideTouchStarSprite(starSprites, i) {
        if (!starSprites[i]) { return; }
        starSprites[i].opacity = 0;
    };


    //- タッチスターの破棄
    function destroyTouchStar(sprite) {
        sprite._touchStarsKe = null;
        if (sprite._touchStarSpritesKe) {
            sprite._touchStarSpritesKe.forEach(s => destroySprite(s));
        }
        sprite._touchStarSpritesKe = null;
    };



    //==================================================
    //--  マウスポインタスクロール
    //==================================================

    //- マウスポインタスクロール
    /*function mousePointerScroll(windo) {
        if (!keke_mousePointerScroll) { return; }
        // マウスモードでなければリターン
        if (!isMouseMode()) { return; }
        // スクロール中はリターン
        if (windo._scrollDuration) { return; }
        const speed = keke_pointerScrollSpeed;
        if (isTouchedUpper(windo)) {
            windo.smoothScrollUp(speed);
        }
        if (isTouchedDowner(windo)) {
            windo.smoothScrollDown(speed);
        }
    };


    //- 上方タッチ中か
    function isTouchedUpper(windo) {
        const touchPos = new Point(TouchInput.x, TouchInput.y);
        const localPos = windo.worldTransform.applyInverse(touchPos);
        const up = windo.innerRect.y;
        return isTouchedInWidth(windo) && localPos.y < up;
    };

    //- 下方タッチ中か
    function isTouchedDowner(windo) {
        const touchPos = new Point(TouchInput.x, TouchInput.y);
        const localPos = windo.worldTransform.applyInverse(touchPos);
        const down = windo.innerRect.y + windo.innerRect.height;
        return isTouchedInWidth(windo) && localPos.y > down;
    };

    //- X範囲内タッチ中か
    function isTouchedInWidth(windo) {
        const touchPos = new Point(TouchInput.x, TouchInput.y);
        const localPos = windo.worldTransform.applyInverse(touchPos);
        const left = windo.innerRect.x;
        const right = windo.innerRect.x + windo.innerRect.width;
        return localPos.x >= left && localPos.x <= right;
    };*/



    //==================================================
    //-  装備コマンド削除
    //==================================================

    //- シーンエクイップ/コマンドウインドウの形成(処理追加)
    const _Scene_Equip_createCommandWindow = Scene_Equip.prototype.createCommandWindow;
    Scene_Equip.prototype.createCommandWindow = function() {
        _Scene_Equip_createCommandWindow.apply(this);
        // 装備コマンドを消す
        if (!keke_delEquipCommand) { return; }
        this._commandWindow.visible = false;
        this._commandWindow.opacity = 0;
    };

    //- シーンエクイップ/コマンドウインドウの矩形(処理追加)
    const _Scene_Equip_commandWindowRect = Scene_Equip.prototype.commandWindowRect
    Scene_Equip.prototype.commandWindowRect = function() {
        // 装備コマンドを消したことによる位置変更
        if (keke_delEquipCommand) {
            const wy = this.mainAreaTop();
            return new Rectangle(0, wy, 0, 0);
        }
        return _Scene_Equip_commandWindowRect.apply(this);
    };


    //- ウインドウ・エクイップコマンド/初期化(処理追加)
    const _Window_EquipCommand_initialize = Window_EquipCommand.prototype.initialize
    Window_EquipCommand.prototype.initialize = function(rect) {
        _Window_EquipCommand_initialize.apply(this, arguments);
        // シーン開始時にスロットに合わせる
        if (keke_delEquipCommand || keke_equipLayoutCustom) {
            this.deactivate();
            this.select(-1);
        }
    };

    //- ウインドウ・エクイップスロット/初期化(処理追加)
    const _Window_EquipSlot_initialize = Window_EquipSlot.prototype.initialize
    Window_EquipSlot.prototype.initialize = function(rect) {
        _Window_EquipSlot_initialize.apply(this, arguments);
        // シーン開始時に初期化
        if (keke_delEquipCommand || keke_equipLayoutCustom) {
            // 装備スロットの初期化
            setTimeout(initEauipSlot, 0, this);
        }
    };
    
    //- 装備スロットの初期化
    function initEauipSlot(windo) {
        windo.activate();
        windo.select(0);
        windo.updateHelp();
    }


    //- シーンエクイップ/キャラ変更時の処理(処理追加)
    const _Scene_Equip_onActorChange = Scene_Equip.prototype.onActorChange;
    Scene_Equip.prototype.onActorChange = function() {
        const slotIndex = this._slotWindow._index;
        _Scene_Equip_onActorChange.apply(this);
        // スロットに合わせる
        if (keke_delEquipCommand || keke_equipLayoutCustom) {
            if (slotIndex >= 0) {
                this._commandWindow.deactivate();
                this.commandEquip();
            }
        }
    };


    //- シーンエクイップ/スロットキャンセル時の処理(処理追加)
    const _Scene_Equip_onSlotCancel = Scene_Equip.prototype.onSlotCancel;
    Scene_Equip.prototype.onSlotCancel = function() {
        // キャンセル省略(+装備コマンド消去/装備レイアウト改良)
        if (((keke_cancelOmit && isTouchishMode()) || keke_delEquipCommand || keke_equipLayoutCustom) && !InDirectTouch  && !InLongTouchSelect) {
            this.popScene();
            return;
        }
        _Scene_Equip_onSlotCancel.apply(this);
    };



    //==================================================
    //-  装備レイアウト改良
    //==================================================

    //- ウインドウ・エクイップスロット/カーソル上(処理追加)
    const _Window_EquipSlot_cursorUp = Window_EquipSlot.prototype.cursorUp;
    Window_EquipSlot.prototype.cursorUp = function(wrap) {
        // 装備レイアウト改良かつ一番上の行なら
        if (keke_equipLayoutCustom && !keke_delEquipCommand && this.row() == 0) {
            // 装備コマンドへ移動
            moveEquipCommand(this);
            return;
        }
        _Window_EquipSlot_cursorUp.apply(this, arguments);
    };

    //- ウインドウ・エクイップスロット/カーソル下(処理追加)
    const _Window_EquipSlot_cursorDown = Window_EquipSlot.prototype.cursorDown;
    Window_EquipSlot.prototype.cursorDown = function(wrap) {
        // 装備レイアウト改良かつ一番下の行なら
        if (keke_equipLayoutCustom && !keke_delEquipCommand && this.row() == this.maxRows() - 1) {
            // 装備コマンドへ移動
            moveEquipCommand(this);
            return;
        }
        _Window_EquipSlot_cursorDown.apply(this, arguments);
    };

    //- 装備コマンドへ移動
    function moveEquipCommand(slotWindow) {
        // スロットウインドウを終了
        slotWindow.deactivate();
        slotWindow.select(-1);
        slotWindow.updateHelp();
        // コマンドウインドウを開始
        const commandWindow = SceneManager._scene._commandWindow;
        commandWindow.activate();
        if (commandWindow._index == -1) { commandWindow.select(0); }
    };


    //- ウインドウ・エクイップコマンド/カーソル上(処理追加)
    const _Window_EquipCommand_cursorUp = Window_EquipCommand.prototype.cursorUp;
    Window_EquipCommand.prototype.cursorUp = function(wrap) {
        // 装備レイアウト改良かつ一番上の行なら
        if (keke_equipLayoutCustom && this.row() == 0) {
            // 装備スロットへ移動
            moveEquipSlot(this);
            return;
        }
        _Window_EquipCommand_cursorUp.apply(this, arguments);
    };

    //- ウインドウ・エクイップコマンド/カーソル下(処理追加)
    const _Window_EquipCommand_cursorDown = Window_EquipCommand.prototype.cursorDown;
    Window_EquipCommand.prototype.cursorDown = function(wrap) {
        // 装備レイアウト改良かつ一番下の行なら
        if (keke_equipLayoutCustom && this.row() == this.maxRows() - 1) {
            // 装備スロットへ移動
            moveEquipSlot(this);
            return;
        }
        _Window_EquipCommand_cursorDown.apply(this, arguments);
    };

    //- 装備スロットへ移動
    function moveEquipSlot(commandWindow) {
        // コマンドウインドウを終了
        commandWindow.deactivate();
        //commandWindow.select(-1);
        // スロットウインドウを開始
        const slotWindow = SceneManager._scene._slotWindow;
        slotWindow.activate();
        slotWindow.select(-1);
        slotWindow.updateHelp();
    };


    //- ウインドウ・エクイップコマンド/コマンドリストの作成(処理追加)
    const _Window_EquipCommand_makeCommandList = Window_EquipCommand.prototype.makeCommandList;
    Window_EquipCommand.prototype.makeCommandList = function() {
        _Window_EquipCommand_makeCommandList.apply(this);
        // 装備レイアウト改良の場合は装備コマンドを削除
        if (keke_equipLayoutCustom) {
            this._list.shift();
        }
    };

    //- ウインドウ・エクイップコマンド/最大列数(処理追加)
    const _Window_EquipCommand_maxCols = Window_EquipCommand.prototype.maxCols
    Window_EquipCommand.prototype.maxCols = function() {
        // 装備レイアウト改良の場合は列数2
        if (keke_equipLayoutCustom) { return 2; }
        return _Window_EquipCommand_maxCols.apply(this);
    };



    //==================================================
    //-  シフトキーで装備を外す
    //==================================================

    //- ウインドウ・エクイップスロット/ハンドリングの処理(処理追加)
    const _Window_EquipSlot_processHandling = Window_EquipSlot.prototype.processHandling
    Window_EquipSlot.prototype.processHandling = function() {
        _Window_EquipSlot_processHandling.apply(this);
        // シフトキーで装備解除
        if (this.isOpenAndActive()) {
            if (this.isHandled("shift") && Input.isTriggered("shift")) {
                this.callHandler("shift");
            }
        }
    };

    
    //- 装備の解除
    function removeEquip() {
        const scene = SceneManager._scene;
        const actor = scene.actor();
        const slotWindow = scene._slotWindow;
        const slotId = slotWindow.index();
        // 装備変更不可ブザーを鳴らしてリターン
        if (!actor.isEquipChangeOk(slotId)) {
            slotWindow.playBuzzerSound();
            return;
        }
        // 装備を解除
        SoundManager.playEquip();
        actor.changeEquip(slotId, null);
        scene._slotWindow.refresh();
        scene._itemWindow.refresh();
        scene._statusWindow.refresh();
    };



    //==================================================
    //-  セーブフォーカス進めない
    //==================================================

    //- シーンセーブ/最初のセーブファイルID
    const _Scene_Save_firstSavefileId = Scene_Save.prototype.firstSavefileId;
    Scene_Save.prototype.firstSavefileId = function() {
        // フォーカスを進めない
        let id = _Scene_Save_firstSavefileId.apply(this);
        if (keke_saveFocusNoNext) {
            const globalInfo = DataManager._globalInfo;
            while (!(globalInfo[id] || id <= 1)) {
                id--;
            }
        }
        return id;
    };



    //==================================================
    //--  コマンド記憶 /選択時に記憶
    //==================================================

    //- メニューアクターの記憶
    function memorizeMenuActor(windo, index) {
        if (keke_memoryTiming != "選択時に記憶") { return; }
        if (index < 0) { return; }
        $gameParty.setMenuActor(windo.actor(index));
    };


    //- ウインドウ・メニューアクター/セレクト(処理追加)
    /*const _Window_MenuActor_select = Window_MenuActor.prototype.select;
    Window_MenuActor.prototype.select = function(index) {
        _Window_MenuActor_select.apply(this, arguments);
        memorizTargetActor(this, index);
    };

    //- ターゲットアクターの記憶
    function memorizTargetActor(windo, index) {
        if (keke_memoryTiming != "選択時に記憶") { return; }
        if (index < 0) { return; }
        if (!windo.cursorAll()) {
            $gameParty.setTargetActor($gameParty.members()[index]);
        }
    };


    //- ウインドウ・アイテムリスト/セレクト(処理追加)
    const _Window_ItemList_select = Window_ItemList.prototype.select;
    Window_ItemList.prototype.select = function(index) {
        _Window_ItemList_select.apply(this, arguments);
        if (this.constructor.name != "Window_ItemList") { return; }
        memorizeItem(this, index);
    };

    //- アイテムの記憶
    function memorizeItem(windo, index) {
        if (index < 0) { return; }
        $gameParty.setLastItem(windo.item());
    };


    //- ウインドウ・スキルリスト/セレクト(処理追加)
    const _Window_SkillList_select = Window_SkillList.prototype.select;
    Window_SkillList.prototype.select = function(index) {
        _Window_SkillList_select.apply(this, arguments);
        if (this.constructor.name != "Window_SkillList") { return; }
        memorizeSkill(this, index);
    };

    //- スキルの記憶
    function memorizeSkill(windo, index) {
        if (index < 0) { return; }
        windo._actor.setLastMenuSkill(windo.itemAt(index));
    };


    //- ウインドウ・スキルタイプ/セレクト(処理追加)
    const _Window_SkillType_select = Window_SkillType.prototype.select;
    Window_SkillType.prototype.select = function(index) {
        _Window_SkillType_select.apply(this, arguments);
        // スキルタイプの記憶
        if (this.constructor.name != "Window_SkillType") { return; }
        if (!this._skillWindow || !this._skillWindow._actor) { return; }
        const actor = this._skillWindow._actor;
        const lastSkill = actor.lastMenuSkill();
        const newStypeId = this.currentExt();
        // スキルタイプの変更がなければリターン
        if (lastSkill) {
            const lastStypeId = lastSkill.stypeId;
            if (lastStypeId == newStypeId) { return; } 
        }
        // 新スキルタイプの一番上のスキルを記憶
        this._skillWindow.setStypeId(newStypeId);
        memorizeSkill(this._skillWindow, 0);
    };*/



    //==================================================
    //--  コマンド記憶 /閉じたら消す
    //==================================================

    //- コマンド記憶のクリア-メニュー開始
    function clearCommandMemoryMenuStart() {
        const preScene = SceneManager._previousScene;
        // メニューを開いた時に
        if (isClearOnClose() && !(preScene instanceof Scene_MenuBase)) {
            // コマンド記憶のクリア
            clearCommandMemory();
        }
    };

    //- コマンド記憶のクリア
    function clearCommandMemory() {
        $gameParty._menuActorId = 0;
        $gameParty._targetActorId = 0;
        $gameParty._lastItem = new Game_Item();
        $gameParty.members().forEach(actor => {
            actor._lastMenuSkill = new Game_Item();
        });
    };

    //- 閉じたらクリアするか
    function isClearOnClose() {
        const cfg = keke_memoryClearMethod;
        if (cfg == "メニュー閉じたらクリア") {
            return true;
        } else if (cfg == "クリアしない(デフォルト)") {
            return false;
        } else {
            return isMv() ? !ConfigManager.commandRememberOnOff : !ConfigManager.commandRemember;
        }
    };


    if (isMv()) {
    //- シーンマネージャー/シーン遷移
    const _SceneManager_changeScene = SceneManager.changeScene;
    SceneManager.changeScene = function() {
        // 前回のシーンを取得
        if (this.isSceneChanging() && !this.isCurrentSceneBusy() && this._scene) {
            this._previousScene = this._scene;
        }
        _SceneManager_changeScene.apply(this);
    };
    }



    //==================================================
    //--  コマンド記憶 /強制スクロール防止
    //==================================================

    //- ウインドウ・メニューステータス/セレクトラスト(処理追加)
    /*const _Window_MenuStatus_selectLast = Window_MenuStatus.prototype.selectLast;
    Window_MenuStatus.prototype.selectLast = function() {
        // 強制スクロールの防止
        if (preventForceScroll(this)) { return; }
        _Window_MenuStatus_selectLast.apply(this);
    };

    //- 強制スクロールの防止
    function preventForceScroll(windo) {
        if (windo._cursorAll) { return false;; }
        const selectIndex = $gameParty.menuActor().index();
        // インデックスを仮に変更
        windo._index = selectIndex;
        // 選択前の位置情報を取得
        const scrollY = windo.scrollY();
        const scrollLast = scrollY + windo.innerHeight;
        // 選択後の位置情報を取得
        const itemTop = windo.row() * windo.itemHeight();
        const itemBottom = itemTop + windo.itemHeight();
        const scrollMin = itemBottom - windo.innerHeight;
        // スクロールするか判定
        if (!(itemTop < scrollY || itemBottom > scrollLast)) { return false; }
        // スクロールするなら元の位置を維持
        const newIndex = Math.floor(scrollY / windo.itemHeight());
        windo.smoothSelect(newIndex);
        return true;
    };*/



    //==================================================
    //--  スクロールバー
    //==================================================

    //- スクロールバーの更新
    function updateScrollBar(windo) {
        if (!keke_showScrollBar) { return; }
        // スクロールバー不要ウインドウならリターン
        if (isNoScrollBarWindow(windo)) { return; }
        // スクロールバーの形成
        createScrollBar(windo);
        // スクロールバーの再形成
        recreateScrollBar(windo);
        // スクロールバーの可視更新
        updateScrollBarVisible(windo);
        if (!windo.visible || !windo.isOpen()) {return; }
        // スクロールバーのタッチ更新
        updateScrollBarTouch(windo);
        // スクロールバーの位置更新
        updateScrollBarPos(windo);
    };

    //- スクロールバー不要ウインドウか
    function isNoScrollBarWindow(windo) {
        if (!windo) { return true; }
        if (windo instanceof Window_ChoiceList) { return true; }
        if (windo instanceof Window_NumberInput) { return true; }
        if (windo instanceof Window_Gold) { return true; }
        return false;
    };


    //- スクロールバーの形成
	function createScrollBar(windo) {
        if (windo._scrollBarSpriteYKe) { return; }
        const rateY = windo.innerHeight / windo.overallHeight();
        if (rateY >= 1) { return; }
        // スクロールバーの描画
        const r = drawScrollBar(windo, rateY);
        // スプライト形成
        const sprite = new Sprite_ClickableKeMncf();
        sprite.bitmap = r.bitmap;
        // バーの高さを保存
        sprite._barHKe = r.barH;
        sprite._boxHKe = r.boxH;
        // バーの位置ずらしを保存
        sprite._offsetXKe = r.offsetX;
        sprite._outWKe = r.outW;
        // チルド
        if (windo._upperSpriteKeMnfs) {
            windo._upperSpriteKeMnfs.addChild(sprite);
        } else {
            windo.addChild(sprite);
        }
        // 変数にセット
        windo._scrollBarSpriteYKe = sprite;
        // スクロールバーの配置
        putScrollBar(windo);
        // スワイプパラムの初期化
        initSwipeParam(sprite);
        
	};

    //- スクロールバーの描画
	function drawScrollBar(windo, rateY) {
        const design = keke_scrollBarDesign;
        const outW = design["縁取り幅"] || 1;
        const round = design["丸み"] != null ? design["丸み"] : 6;
        // 横幅
        const barW = design["太さ"] || 10;
        const boxW = barW + outW
        const touchW = Math.max(design["タッチ範囲太さ"] || 30, boxW);
        const offsetX = Math.ceil((touchW - boxW) / 2);
        // 縦幅
        const windowH = windo.innerHeight;
        const boxH = windowH;
        const barH = boxH * rateY;
        // 色
        const color = design["バー本体色"] || "rgba(255, 128, 0, 1)";
        const color2 = design["バー本体色-グラデ"] ||  "rgba(255, 255, 255, 1)";
        const colors = design["バー本体-色タイプ"] == "グラデーション" ? [color, color2] : color;
        const strokeColor = "rgba(0, 0, 0, 1)";
        // ビットマップ形成
        const bitmap = new Bitmap(touchW, barH + outW);
        // 描画
        fillSquare(bitmap, outW / 2 + offsetX, outW / 2, barW, barH, colors, 0, round);
        if (outW) {
            strokeSquare(bitmap, outW / 2 + offsetX, outW / 2, barW, barH, strokeColor, outW, 0, round);
        }
        // スクロールバックの形成
        createScrollBack(windo, boxW, boxH, round, rateY, outW, outW);
        return { bitmap:bitmap, barH:barH, boxH:boxH, offsetX:offsetX, outW:outW };
    };

    //- スクロールバックの形成
	function createScrollBack(windo, boxW, boxH, round, rateY, outW) {
        if (rateY >= 1) { return; }
        // ビットマップ形成
        const bitmap = new Bitmap(boxW, boxH);
        // 色
        const color = keke_scrollBarDesign["バー背景色"] || "rgba(96, 96, 96, 1)";
        // 描画
        fillSquare(bitmap, 0, 0, boxW, boxH, color, 0, round);
        // スプライト形成
        const sprite = new SpriteKeMncf(bitmap);
        // チルド
		windo.addChild(sprite);
        // 変数にセット
        windo._scrollBackSpriteYKe = sprite;
        // 配置
        sprite.x = windo.padding + windo.innerWidth - Math.floor(outW);
		sprite.y = windo.padding;
    };

    //- スクロールバーの位置更新
    function updateScrollBarPos(windo) {
        if (!windo._scrollBarSpriteYKe) { return; }
        const scrollY = windo.scrollY();
        // スクロールしたか判定
        if (windo._scrollYPreKe == null || scrollY != windo._scrollYPreKe) {
            // スクロールバーの配置
            putScrollBar(windo);
        }
        windo._scrollYPreKe = scrollY;
    };

    //- スクロールバーの配置
    function putScrollBar(windo) {
        // バースプライト
        const sprite = windo._scrollBarSpriteYKe;
        // バーの高さ
        const barH = sprite._barHKe;
        const boxH = sprite._boxHKe;
        // ボックスの位置
        const boxX = windo.padding + windo.innerWidth;
		const boxY = windo.padding;
        // スクロール位置
        const rate = windo.scrollY() / windo.maxScrollY();
		const barY = rate * (boxH - barH);
		// 配置
        sprite.x = boxX - sprite._offsetXKe - Math.floor(sprite._outWKe);
        sprite.y = boxY + barY;
    };


    //- スクロールバーの再形成
    function recreateScrollBar(windo) {
        if (!windo._scrollBarSpriteYKe) { return; }
        const heightRate = windo.innerHeight / windo.overallHeight();
        // 横幅率か高さ率に変更があったら
        if (windo._heightRatePreKeMncf && windo._heightRatePreKeMncf != heightRate) {
            // スクロールバーの破棄
            destroyScrollBar(windo);
        }
        windo._heightRatePreKeMncf = heightRate
    };


    //- スクロールバーの可視更新
    function updateScrollBarVisible(windo) {
        if (!windo._scrollBarSpriteYKe) { return; }
        const isVisible = windo.visible && windo.isOpen();
        windo._scrollBarSpriteYKe.visible = isVisible;
        windo._scrollBackSpriteYKe.visible = isVisible;
    };


    //- スクロールバーの破棄
    function destroyScrollBar(windo) {
        destroySprite(windo._scrollBarSpriteYKe);
        destroySprite(windo._scrollBackSpriteYKe);
        windo._scrollBarSpriteYKe = null;
        windo._scrollBackSpriteYKe = null;
    };



    //==================================================
    //--  スクロールバー/スワイプ
    //==================================================

    //- スクロールバーのタッチ更新
    function updateScrollBarTouch(windo) {
        if (!windo._scrollBarSpriteYKe) { return; }
        const sprite = windo._scrollBarSpriteYKe;
        const p = sprite._swipeParamKe;
        if (!p) { return; }
        // タッチスワイプの更新
        const swiped = updateTouchSwipe(sprite, p);
        // スクロールバーの縦スクロール
        if (swiped && p.swipeY) {
            scrollSlideBarVertical(windo, sprite, p.swipeY, 0);
        }
    };

    //- スクロールバーの縦スクロール
    function scrollSlideBarVertical(windo, sprite, swipeY) {
        const boxH = sprite._boxHKe;
        const rate = swipeY / boxH;
        const scrollY = windo.overallHeight() * rate;
        windo.scrollBy(0, scrollY);
    };



    //==================================================
    //--  パーティ一覧ウインドウ
    //==================================================

    function Window_PartyWideLookKe() {
        this.initialize(...arguments);
    }
    
    Window_PartyWideLookKe.prototype = Object.create(Window_MenuStatus.prototype);
    Window_PartyWideLookKe.prototype.constructor = Window_PartyWideLookKe;

    //- 初期化
    Window_PartyWideLookKe.prototype.initialize = function(rect) {
        // 描画用ゲージスプライトを形成
        this.createForDrawGaugeSprite();
        Window_MenuStatus.prototype.initialize.call(this, rect);
        // カーソルの形成
        this.createCursor();
        // 並べ替えカーソルの形成
        this.createCursor(true);
        // コンテンツバックを消去
        this._contentsBackSprite.visible = false;
    };

    //- コンテンツの形成
    /*Window_PartyWideLookKe.prototype.createContents = function() {
        Window_MenuStatus.prototype.createContents.call(this);
        // テキストレイヤーの形成
        this.createTextLayer();
    };*/

    //- 独自カーソルレイヤーを形成
    Window_PartyWideLookKe.prototype._createCursorSprite = function() {
        Window.prototype._createCursorSprite.call(this);
        this._cursorLayerKeMncf = new Sprite();
        this._container.addChild(this._cursorLayerKeMncf);
    };

    //- 更新
    Window_PartyWideLookKe.prototype.update = function(rect) {
        Window_MenuStatus.prototype.update.call(this, rect);
        // ペイントの更新
        this.updatePaint();
        // カーソルの更新
        this.updateCursor();
        // 並べ替えカーソルの更新
        this.updateCursorPending();
    };

    //- 横の列数
    Window_PartyWideLookKe.prototype.maxCols = function() {
        return keke_wideLookWindowCfg["横の表示数"] || 4;
    };

    //- 縦の行数
    Window_PartyWideLookKe.prototype.numVisibleRows = function() {
        const cfg = keke_wideLookWindowCfg
        const membersNum = $gameParty.members().length;
        const maxCols = this.maxCols();
        const adjustRows = Math.ceil(membersNum / maxCols);
        const maxRows = cfg["縦の表示数"] || 5;
        const minRows = cfg["…縦の最低数"] || 3;
        return Math.max(Math.min(adjustRows, maxRows), minRows);
    };


    //- カーソルの形成
    Window_PartyWideLookKe.prototype.createCursor = function(isPending) {
        const cfg = keke_wideLookWindowCfg;
        if (!cfg["カーソル表示"]) { return; }
        const rect = this.itemRect(0);
        const lineW = cfg["カーソルサイズ+"] || 8;
        const round = cfg["カーソル丸み"] || 50;
        const color = isPending ? (cfg["カーソル色(並べ替え)"] || "rgba(240, 240, 0, 1)") : (cfg["カーソル色"] || "rgba(0, 255, 255, 1)");
        const width = rect.width;
        const height = rect.height;
        // ビットマップ形成
        const bitmap = new Bitmap(width + lineW * 2, height + lineW * 2);
        // スプライト形成
        const sprite = new SpriteKeMncf(bitmap);
        // 描画
        fillSquare(bitmap, lineW * 0, lineW  *  0, width + lineW * 2, height + lineW * 2, color, 0, round);
        // チルド
        this._cursorLayerKeMncf.addChild(sprite);
        // 変数にセット
        if (isPending) {
            this._cursorSpritePendingKeMncf = sprite;
        } else {
            this._cursorSpriteKeMncf = sprite;
        }
        // ライン幅を保存
        sprite._lineWKeMncf = lineW;
        // 最初は見えない化
        sprite.visible = false;
    };

    // 項目画像の描画
    Window_PartyWideLookKe.prototype.drawItemImage = function(index) {
        // 一覧ウインドウ描画中フラグをオン
        inDrawWideLookWindow = true;
        const actor = this.actor(index);
        const rect = this.itemRect(index);
        const width = rect.width;
        const height = rect.height - 2;
        // 顔グラの描画
        this.drawFaceKe(actor, rect, width, height);
        // テキストレイヤーの形成
        this.createTextLayer();
        // バトルメンバー枠の描画
        this.drawBattleMemberRect(index, rect, width, height);
        // ステートアイコンの描画
        this.drawStateIcon(actor, index, rect);
        // 名前の描画
        this.drawName(actor, index, rect);
        // 職業の描画
        this.drawClass(actor, index, rect);
        // ステータスの描画
        this.drawStatus(actor, index, rect);
        // レベルの描画
        this.drawLevel(actor, index, rect);
        // 一覧ウインドウ描画中フラグをオフ
        inDrawWideLookWindow = false;
    };

    //- 顔グラの描画
    Window_PartyWideLookKe.prototype.drawFaceKe = function(actor, rect, width, height) {
        const cfg = keke_wideLookWindowCfg;
        const round = cfg["顔グラ丸み"] || 40;
        const faceName = actor.faceName();
        const faceIndex = actor.faceIndex();
        const contents = this.contents;
        const context = contents.context;
        const faceW = Math.min(width, cfg["顔グラ横幅"] || ImageManager.faceWidth);
        const faceH = Math.min(height, cfg["顔グラ高さ"] || ImageManager.faceHeight);
        const faceX = rect.x + (faceW < width ? (width - faceW) / 2 : 0);
        const faceY = rect.y + (faceH < height ? (height - faceH) / 2 : 0);
        // 描画(顔アイコンがあればそれを描画)
        if (!createFaceMake(actor, { window:this, x:faceX, y:faceY, width:faceW, height:faceH })) {
            if (faceName && faceIndex >= 0) {
                context.save();
                designSquare(contents, faceX, faceY, faceW, faceH, 0, round);
                context.clip();
                this.drawFace(actor.faceName(), actor.faceIndex(), rect.x, rect.y, width, height);
                context.restore();
            }
        }
    };

    //- テキストレイヤーの形成
    Window_PartyWideLookKe.prototype.createTextLayer = function() {
        // 形成
        const textLayer = new SpriteKeMncf(new Bitmap(this.contentsWidth(), this.contentsHeight()));
        // アンカー
        textLayer.anchor.x = 0;
        textLayer.anchor.y = 0;
        // チルド
        this.addChild(textLayer);
        // 変数にセット
        this._textLayer = textLayer;
        this._textContents = textLayer.bitmap;
        textLayer.x = this._padding;
        textLayer.y = this._padding;
    };

    //- テキストの描画(テキストレイヤー)
    Window_PartyWideLookKe.prototype.drawTextKe = function(text, x, y, maxWidth, align) {
        // コンテンツのフォント設定をコピー
        const textContents = this._textContents;
        textContents.fontFace = this.contents.fontFace;
        textContents.fontSize = this.contents.fontSize;
        textContents.textColor = this.contents.textColor;
        textContents.outlineWidth = this.contents.outlineWidth;
        textContents.outlineColor =this.contents.outlineColor;
        // 描画
        this._textContents.drawText(text, x, y, maxWidth, textContents.fontSize, align);
    };

    //- バトラー枠の描画
    Window_PartyWideLookKe.prototype.drawBattleMemberRect = function(index, rect, width, height) {
        const cfg = keke_wideLookWindowCfg;
        if (!cfg["バトラー枠-表示"]) { return; }
        const menbersNum = $gameParty.members().length;
        const battleNum = $gameParty.maxBattleMembers();
        if (menbersNum <= battleNum) { return; }
        if (index >= battleNum) { return; }
        const rectW = cfg["バトラー枠-太さ"] || 5;
        const color = cfg["バトラー枠-色"] || "rgba(255, 224, 0, 1)";
        const round = cfg["顔グラ丸み"] || 40;
        const faceW = Math.min(width, cfg["顔グラ横幅"] || ImageManager.faceWidth);
        const faceH = Math.min(height, cfg["顔グラ高さ"] || ImageManager.faceHeight);
        const faceX = rect.x + (faceW < width ? (width - faceW) / 2 : 0);
        const faceY = rect.y + (faceH < height ? (height - faceH) / 2 : 0);
        // 描画
        strokeSquare(this._textContents, faceX, faceY, faceW, faceH, color, rectW, 0, round);
    };

    //- 名前の描画
    Window_PartyWideLookKe.prototype.drawName = function(actor, index, rect) {
        const name = actor.name();
        if (!name) { return; }
        const cfg = keke_wideLookWindowCfg;
        if (!cfg["名前-表示"]) { return; }
        if (isOrMoreHideRows(this, cfg["名前-隠す行数"])) { return; };
        const fontSize = applyGlobalSize(this, cfg["名前-文字サイズ"] || 18);
        const color =  cfg["名前-文字色"] || "rgba(255, 255, 255)";
        const outW =  cfg["名前-縁取り幅"] || 5;
        const contents = this.contents;
        // フォント設定のセープ
        const fontSave = saveFontCfg(contents);
        // フォント設定
        contents.fontSize = fontSize;
        contents.textColor = color;
        contents.outlineWidth = outW;
        // テキスト幅
        const textW = contents.measureTextWidth(name);
        // 位置
        const put = cfg["名前-配置"] || "左上";
        const offsetX = cfg["名前-ずらしX"] || 0;
        const offsetY = cfg["名前-ずらしY"] || 0;
        const adjustY = rect.height > ImageManager.faceHeight ? (rect.height - ImageManager.faceHeight) / 4 : 0;
        const x = (put.includes("右") ? rect.x + rect.width - textW : rect.x) + offsetX;
        const y = (put.includes("下") ? rect.y + rect.height - fontSize - adjustY : rect.y + adjustY) + offsetY;
        // サイズ
        const width = rect.width;
        const height = fontSize;
        // 描画
        const align = put.includes("右") ? "right" : "left";
        this.drawTextKe(name, x, y, width, align);
        // フォント設定のロード
        loadFontCfg(contents, fontSave);
    };

    //- 職業の描画
    Window_PartyWideLookKe.prototype.drawClass = function(actor, index, rect) {
        const name = actor.currentClass().name;
        if (!name) { return; }
        const cfg = keke_wideLookWindowCfg;
        if (!cfg["職業-表示"]) { return; }
        if (isOrMoreHideRows(this, cfg["職業-隠す行数"])) { return; };
        const fontSize = applyGlobalSize(this, cfg["職業-文字サイズ"] || 18);
        const color =  cfg["職業-文字色"] || "rgba(255, 255, 255)";
        const outW =  cfg["職業-縁取り幅"] || 5;
        const contents = this.contents;
        // フォント設定のセープ
        const fontSave = saveFontCfg(contents);
        // フォント設定
        contents.fontSize = fontSize;
        contents.textColor = color;
        contents.outlineWidth = outW;
        // テキスト幅
        const textW = contents.measureTextWidth(name);
        // 位置
        const put = cfg["職業-配置"] || "左上";
        const offsetX = cfg["職業-ずらしX"] || 0;
        const offsetY = cfg["職業-ずらしY"] || 0;
        const adjustY = rect.height > ImageManager.faceHeight ? (rect.height - ImageManager.faceHeight) / 4 : 0;
        const x = (put.includes("右") ? rect.x + rect.width - textW : rect.x) + offsetX;
        const y = (put.includes("下") ? rect.y + rect.height - fontSize - adjustY : rect.y + adjustY) + offsetY;
        // サイズ
        const width = rect.width;
        const height = fontSize;
        // 描画
        const align = put.includes("右") ? "right" : "left";
        this.drawTextKe(name, x, y, width, align);
        // フォント設定のロード
        loadFontCfg(contents, fontSave);
    };

    //- レベルの描画
    Window_PartyWideLookKe.prototype.drawLevel = function(actor, index, rect) {
        const label = TextManager.levelA +  " ";
        const level =(actor._level).toString();
        if (!level) { return; }
        const cfg = keke_wideLookWindowCfg;
        if (!cfg["レベル-表示"]) { return; }
        if (isOrMoreHideRows(this, cfg["レベル-隠す行数"])) { return; };
        const fontSize = applyGlobalSize(this, cfg["レベル-文字サイズ"] || 18);
        const color =  cfg["レベル-文字色"] || "rgba(255, 255, 255)";
        const outW =  cfg["レベル-縁取り幅"] || 5;
        const contents = this.contents;
        // フォント設定のセープ
        const fontSave = saveFontCfg(contents);
        // フォント設定
        contents.fontSize = fontSize;
        contents.textColor = color;
        contents.outlineWidth = outW;
        // テキスト幅
        const labelW = Math.min(cfg["レベル-ラベル幅"] || 30, contents.measureTextWidth(label))
        const levelWOri = cfg["レベル-横幅"] || 36;
        const levelW = Math.min(levelWOri, contents.measureTextWidth(level));
        const textW = labelW + levelW;
        // 位置
        const put = cfg["レベル-配置"] || "左下";
        const offsetX = cfg["レベル-ずらしX"] || 0;
        const offsetY = cfg["レベル-ずらしY"] || -5;
        const adjustY = rect.height > ImageManager.faceHeight ? (rect.height - ImageManager.faceHeight) / 4 : 0;
        const x = (put.includes("右") ? rect.x + rect.width - textW : rect.x) + offsetX;
        const y = (put.includes("下") ? rect.y + rect.height - fontSize - adjustY : rect.y + adjustY) + offsetY;
        // サイズ
        const width = rect.width;
        const height = fontSize;
        // 描画
        contents.textColor = ColorManager.systemColor();
        this.drawTextKe(label, x, y, labelW);
        contents.textColor = color;
        this.drawTextKe(level, x + labelW, y, levelW);
        // 最大レベル
        const maxLevel = getMaxLevel(actor);
        if (maxLevel) {
            const slash = " /";
            const maxLevelText = slash + maxLevel;
            const maxLevelW = contents.measureTextWidth(slash) + Math.min(levelWOri, contents.measureTextWidth(maxLevel.toRtoring));
            this.drawTextKe(maxLevelText, x + textW, y, maxLevelW);
        }
        // aaa
        // フォント設定のロード
        loadFontCfg(contents, fontSave);
    };

    //- ステートアイコンの描画
    Window_PartyWideLookKe.prototype.drawStateIcon = function(actor, index, rect) {
        const cfg = keke_wideLookWindowCfg;
        if (!cfg["ステート-表示"]) { return; }
        if (isOrMoreHideRows(this, cfg["ステート-隠す行数"])) { return; };
        const iconWidth = ImageManager.iconWidth;
        const icons = actor.allIcons().slice(0, Math.floor(rect.width / iconWidth));
        // 位置
        const put = cfg["ステート-配置"] || "左下";
        const offsetX = cfg["ステート-ずらしX"] || 0;
        const offsetY = cfg["ステート-ずらしY"] || 0;
        const adjustY = rect.height > ImageManager.faceHeight ? (rect.height - ImageManager.faceHeight) / 4 : 0;
        const x = (put.includes("右") ? rect.x + rect.width - textW : rect.x) + offsetX;
        const y = (put.includes("下") ? rect.y + rect.height - iconWidth - adjustY : rect.y + adjustY) + offsetY;
        let iconX = x;
        for (const icon of icons) {
            this.drawIconKe(icon, iconX, y);
            iconX += iconWidth;
        }
    };

    //- アイコンの描画(独自)
    Window_PartyWideLookKe.prototype.drawIconKe = function(iconIndex, x, y) {
        const bitmap = ImageManager.loadSystem("IconSet");
        const pw = ImageManager.iconWidth;
        const ph = ImageManager.iconHeight;
        const sx = (iconIndex % 16) * pw;
        const sy = Math.floor(iconIndex / 16) * ph;
        this._textContents.blt(bitmap, sx, sy, pw, ph, x, y);
    };

    //- 標準のステータス描画を消去
    Window_PartyWideLookKe.prototype.drawActorSimpleStatus = function(actor, x, y) {

    };


    // ペイントの更新
    Window_PartyWideLookKe.prototype.updatePaint = function() {
        if (!this._paintCountKe) { return; }
        this.paint();
        this._paintCountKe--;
    };


    //- カーソルの更新
    Window_PartyWideLookKe.prototype.updateCursor = function() {
        if (!this._cursorSpriteKeMncf) { return; }
        // カーソルの位置更新
        this.updateCursorPos();
        // カーソルの可視更新
        this.updateCursorVisible();
        // カーソルの点滅
        this.cursorBlink();
    };

    //- カーソルの位置更新
    Window_PartyWideLookKe.prototype.updateCursorPos = function() {
        if (this.index() < 0) { return; }
        const rect = this.itemRect(this.index());
        const sprite = this._cursorSpriteKeMncf;
        const rectX = rect.x;
        const rectY = rect.y;
        sprite.x = rectX + this.padding - sprite._lineWKeMncf;
        sprite.y = rectY + this.padding - sprite._lineWKeMncf;
    };

    //- カーソルの可視更新
    Window_PartyWideLookKe.prototype.updateCursorVisible = function() {
        this._cursorSpriteKeMncf.visible = this.index() >= 0;
    };

    //- カーソルの点滅
    Window_PartyWideLookKe.prototype.cursorBlink = function() {
        if (this.index() < 0) { return; }
        this._cursorSpriteKeMncf.alpha = this._makeCursorAlpha();
    };


    //- 並べ替えカーソルの更新
    Window_PartyWideLookKe.prototype.updateCursorPending = function() {
        if (!this._cursorSpritePendingKeMncf) { return; }
        // インデックス変更時の更新
        if (this._pendingIndex != this._prePendingIndexKeMncf) {
            // 並べ替えカーソルの位置更新
            this.updateCursorPosPending();
            // 並べ替えカーソルの可視更新
            this.updateCursorVisiblePending();
        }
        // 前のインデックス
        this._prePendingIndexKeMncf = this._pendingIndex;
    };

    //- 並べ替えカーソルの位置更新
    Window_PartyWideLookKe.prototype.updateCursorPosPending = function() {
        if (this._pendingIndex < 0) { return; }
        const rect = this.itemRect(this._pendingIndex);
        const sprite = this._cursorSpritePendingKeMncf;
        const rectX = rect.x;
        const rectY = rect.y;
        sprite.x = rectX + this.padding - sprite._lineWKeMncf;
        sprite.y = rectY + this.padding - sprite._lineWKeMncf;
    };

    //- 並べ替えカーソルの可視更新
    Window_PartyWideLookKe.prototype.updateCursorVisiblePending = function() {
        this._cursorSpritePendingKeMncf.visible = this._pendingIndex >= 0;
    };

    //- 標準のカーソルの消去(処理追加)
    const _Window_PartyWideLookKe_updateCursor = Window_PartyWideLookKe.prototype._updateCursor;
    Window_PartyWideLookKe.prototype._updateCursor = function() {
        if (keke_wideLookWindowCfg["標準カーソル消去"]) {
            this._cursorSprite.visible = false;
            return;
        }
        _Window_PartyWideLookKe_updateCursor.apply(this);
    };

    //- ウインドウ・メニューステータス/並べ替えカーソルの描画
    const _Window_MenuStatus_drawPendingItemBackground = Window_MenuStatus.prototype.drawPendingItemBackground;
    Window_MenuStatus.prototype.drawPendingItemBackground = function(index) {
        // 標準の並べ替えカーソルの消去
        if (keke_wideLookWindowCfg["標準カーソル消去"]) {
            return;
        }
        _Window_MenuStatus_drawPendingItemBackground.apply(this, arguments);
    };


    //- 破棄
    Window_PartyWideLookKe.prototype.destroy = function() {
        Window_MenuStatus.prototype.destroy.call(this);
        // カーソル
        destroySprite( this._cursorSpriteKeMncf);
        this._cursorSpriteKeMncf = null;
        // 並べ替えカーソル
        destroySprite( this._cursorSpritePendingKeMncf);
        this._cursorSpritePendingKeMncf = null;
        // カーソルレイヤー
        destroySprite( this._cursorLayerKeMncf);
        // ゲージスプライト
        if (this._additionalSprites) {
            const addSprites = this._additionalSprites;
            Object.keys(addSprites).forEach(key => {
                const sprite = addSprites[key];
                destroySprite(sprite);
            });
            this._additionalSprites = null;
        }
        // 描画用ゲージスプライト
        destroySprite(this._forDrawGaugeSpriteKe);
        this._forDrawGaugeSpriteKe = null;
    };
    

    //- 全体サイズ率の適用
    function applyGlobalSize(windo, val, noRevise) {
        const cfg = keke_wideLookWindowCfg;
        // 全体サイズ
        const sizeRate = cfg["全体サイズ率"] || 1;
        // 行数による小型化
        const maxRows = windo.maxRows();
        const minRows = cfg["…縦の最低数"] || 2
        const reviseRate = cfg["小型化補正"] || 1;
        const rowRevise = noRevise ? 1 : reviseRate ** (maxRows - 2);
        return Math.floor(val * sizeRate * rowRevise);
    };

    //- 隠す行数以上か
    function isOrMoreHideRows(windo, hideRows) {
        return hideRows && windo.maxRows() >= hideRows;
    };


    //- アクティブ解除の同期
    /*Window_PartyWideLookKe.prototype.deactivate = function() {
        Window_Base.prototype.deactivate.call(this);
        const scene = SceneManager._scene;
        if (scene._statusWindow) {
            scene._statusWindow.active = false;
        }
    };

    //- アクティブ解除の同期
    const _Window_MenuStatus_deactivate = Window_MenuStatus.prototype.deactivate;
    Window_MenuStatus.prototype.deactivate = function() {
        _Window_MenuStatus_deactivate.apply(this);
        const scene = SceneManager._scene;
        if (scene._partyWideLookWindowKe) {
            scene._partyWideLookWindowKe.active = false;
        }
    };*/



    //==================================================
    //--  パーティ一覧ウインドウ /描画用ゲージスプライト
    //==================================================

    function Sprite_GaugeForDrawKeMncf() {
        this.initialize(...arguments);
    }
    
    Sprite_GaugeForDrawKeMncf.prototype = Object.create(Sprite_Gauge.prototype);
    Sprite_GaugeForDrawKeMncf.prototype.constructor = Sprite_GaugeForDrawKeMncf;

    //- 初期化
    Sprite_GaugeForDrawKeMncf.prototype.initialize = function(windo) {
        Sprite_Gauge.prototype.initialize.call(this);
        this._windowKe = windo;
    };

    //- ビットマップ更新を禁止
    Sprite_GaugeForDrawKeMncf.prototype.updateBitmap = function() {
        
    };

    //- ラベルを描画しない
    Sprite_GaugeForDrawKeMncf.prototype.drawLabel = function() {
       
    };

    //- ラベル幅を 0
    Sprite_GaugeForDrawKeMncf.prototype.measureLabelWidth = function() {
        return 0;
    };

    //- 数値の描画
    Sprite_GaugeForDrawKeMncf.prototype.drawValue = function(x, y, width, height) {
        const currentValue = abbreviationValue(this.currentValue(), this._battler, this._statusType);
        this.setupValueFont();
        this.bitmap.drawText(currentValue, x, y, width, height, "right");
    };

    //- 文字サイズ
    Sprite_GaugeForDrawKeMncf.prototype.valueFontSize = function() {
        return this._fontSizeKe ||  $gameSystem.numberFontFace();
    };

    //- 文字の縁取り幅
    Sprite_GaugeForDrawKeMncf.prototype.valueOutlineWidth = function() {
        return this._outWidthKe || this._windowKe.contents.outlineWidth || 2;
    };

    //- ビットマップ幅
    Sprite_GaugeForDrawKeMncf.prototype.bitmapWidth = function() {
        return this._widthKe || 128;
    };

    //- 一覧ウインドウのゲージ高
    Window_PartyWideLookKe.prototype.gaugeLineHeight = function() {
        const cfg = keke_wideLookWindowCfg;
        const scale = cfg["ステータス-スケール"] || 1;
        return 24 * scale;
    };

    //- 一覧ウインドウでは通常描画はなし
    Window_PartyWideLookKe.prototype.drawItemStatus = function(actor, x, y) {
        
    };


    //- 描画用ゲージスプライトの形成
    Window_PartyWideLookKe.prototype.createForDrawGaugeSprite = function() {
        const sprite = new Sprite_GaugeForDrawKeMncf(this);
        // 変数にセット
        this._forDrawGaugeSpriteKe = sprite;
    };

    //- ステータスの描画
    Window_PartyWideLookKe.prototype.drawStatus = function(actor, index, rect) {
        const contents = this.contents;
        const cfg = keke_wideLookWindowCfg;
        if (!cfg["ステータス-表示"]) { return; }
        const fontSize = applyGlobalSize(this, cfg["ステータス-文字サイズ"] || 18);
        // ステータスのサイズ
        const width = applyGlobalSize(this, cfg["ステータス-横幅"] || 64);
        const lineSpace = cfg["ステータス-行間"] || 0;
        const lineH = fontSize;
        const gaugeH = cfg["ステータス-ゲージ高さ"] || 10;
        const gaugeY = lineH - gaugeH;
        const totalH = lineH * 3 + lineSpace * 2;
        // 位置
        const put = cfg["ステータス-配置"] || "右下";
        const offsetX = cfg["ステータス-ずらしX"] || 0;
        const offsetY = cfg["ステータス-ずらしY"] || 0;
        const adjustY = rect.height > ImageManager.faceHeight ? (rect.height - ImageManager.faceHeight) / 4 : 0;
        let x = (put.includes("右") ? rect.x + rect.width - width : rect.x) + offsetX;
        let y = (put.includes("下") ? rect.y + rect.height - totalH - adjustY : rect.y + adjustY) + offsetY;
        // 描画用ゲージスプライトを取得
        const forDraw = this._forDrawGaugeSpriteKe;
        forDraw.bitmap = this._textContents;
        // 描画用ゲージスプライトに描画設定をセット
        forDraw._fontSizeKe = fontSize;
        forDraw._outWidthKe = cfg["ステータス-縁取り幅"] || 5;
        forDraw._gaugeHeightKe = gaugeH;
        forDraw._widthKe = width;
        // フォント設定のセープ
        const fontSave = saveFontCfg(contents);
        // HPの描画
        forDraw.setup(actor, "hp");
        forDraw.drawGaugeRect(x, y + gaugeY, width, gaugeH);
        forDraw.drawValue(x, y, width, lineH);
        y += lineH + lineSpace;
        // MPの描画
        forDraw.setup(actor, "mp");
        forDraw.drawGaugeRect(x, y + gaugeY, width, gaugeH);
        forDraw.drawValue(x, y, width, lineH);
        y += lineH + lineSpace;
        // TPの描画
        forDraw.setup(actor, "tp");
        forDraw.drawGaugeRect(x, y + gaugeY, width, gaugeH);
        forDraw.drawValue(x, y, width, lineH);
        // フォント設定のロード
        loadFontCfg(contents, fontSave);
    };



    //==================================================
    //--  一覧モードの開始
    //==================================================

    //- シーンメニュー/ステータスウインドウの形成(処理追加)
    const _Scene_Menu_createStatusWindow = Scene_Menu.prototype.createStatusWindow;
    Scene_Menu.prototype.createStatusWindow = function() {
        if (!isWideLookAlways(this)) {
            _Scene_Menu_createStatusWindow.apply(this);
        }
        // パーティ一覧ウインドウの作成
        makePartyWideLookWindow(this);
    };

    // パーティ一覧ウインドウの作成
    function makePartyWideLookWindow(scene) {
        if (!isValidWideLookMode(scene)) { return; }
        const rect = scene.statusWindowRect();
        const WideLookWindow = new Window_PartyWideLookKe(rect);
        // チルド
        scene.addWindow(WideLookWindow);
        // 変数にセット
        scene._partyWideLookWindowKe = WideLookWindow;
        scene._normalStatusWindowKe = scene._statusWindow;
        // 常に一覧モードならすぐ一覧モードに
        if (isWideLookAlways(scene)) {
            // 一覧モードフラグをオン
            changeWideLookModeFlag(true);
        }
        // 一覧モードでないなら
        if (!isWideLookMode()) {
            // 最初は見えない化
            WideLookWindow.openness = 0;
        // 一覧モードなら
        } else {
            // 一覧モードへの切り替え
            switchToWideLookMode(scene, true);
        }
    };


    //- 一覧モードへの切り替え
    function switchToWideLookMode(scene, force) {
        if (isWideLookMode() && !force) { return; }
        const statusWindow = scene._normalStatusWindowKe;
        const WideLookWindow = scene._partyWideLookWindowKe;
        // 変数の入れ替え
        scene._statusWindow = WideLookWindow;
        // 一覧ウインドウ見える化
        WideLookWindow.openness = 255;
        // 一覧モードフラグをオン
        changeWideLookModeFlag(true);
        // 再描画
        WideLookWindow.paint();
        // カーソルスクロール
        WideLookWindow.ensureCursorVisible();
        // 通常ウインドウの処理
        if (statusWindow) {
            // 通常ウインドウの見えない化
            statusWindow.openness = 0;
            // アクティブを同期
            WideLookWindow.active = statusWindow.active;
        }
        // スクロールの停止
        stopScroll([statusWindow, WideLookWindow]);
    };

    //- 通常モードへの切り替え
    function switchToNormalMode(scene) {
        if (!isWideLookMode()) { return; }
        const statusWindow = scene._normalStatusWindowKe;
        const wideLookWindow = scene._partyWideLookWindowKe;
        // 変数の入れ替え
        scene._statusWindow = statusWindow;
        // 一覧ウインドウの見えない化
        wideLookWindow.openness = 0;
        // 一覧モードフラグをオフ
        changeWideLookModeFlag(false);
        // 通常ウインドウの処理
        if (statusWindow) {
            // ゲージスプライトの見えない化
            hideGaugeSprite(statusWindow);
            // 通常ウインドウ見える化
            statusWindow.openness = 255;
            // 再描画
            statusWindow.paint();
            // カーソルスクロール
            statusWindow.ensureCursorVisible();
            // アクティブを同期
            statusWindow.active = wideLookWindow.active;
        }
        // スクロールの停止
        stopScroll([statusWindow, wideLookWindow]);
    };

    //- ゲージスプライトの見えない化
    function hideGaugeSprite(windo) {
        if (!windo._additionalSprites) { return; }
        const addSprites = windo._additionalSprites;
        Object.keys(addSprites).forEach(key => {
            const sprite = addSprites[key];
            if (!sprite) { return; }
            sprite.hide();
        });

    };

    //- スクロールの停止
    function stopScroll(windows) {
        windows.forEach(windo => {
            if (!windo) { return; }
            windo._scrollDuration = 0;
            windo._scrollAccelX = 0;
            windo._scrollAccelY = 0;
        });
    };



    //==================================================
    //--  一覧モードの更新
    //==================================================

    //- シーンメニュー/更新(処理追加)
    const _Scene_Menu_update = Scene_Menu.prototype.update;
    Scene_Menu.prototype.update = function() {
        _Scene_Menu_update.apply(this);
        // 一覧モードの更新
        updateWideLookMode(this);
    };

    //- 一覧モードの更新
    function updateWideLookMode(scene) {
        if (!isValidWideLookMode(scene)) { return; }
        // シフトプッシュで
        if (Input.isTriggered("shift") && !isWideLookAlways(scene)) {
            // 一覧モードの切り替え
            switchWideLookMode(scene);
        }
    };

    //- 一覧モードの切り替え
    function switchWideLookMode(scene) {
        // 一覧モードへの切り替え
        if (!isWideLookMode()) {
            switchToWideLookMode(scene);
        // 通常モードへの切り替え
        } else {
            switchToNormalMode(scene);
        }
        SoundManager.playOk();
    };

    //- 一覧モードフラグ切り替え
    function changeWideLookModeFlag(boolean) {
        $gameParty._menuPartyWideLookModeKe = boolean;
    };


    // ステータスウインドウのカーソル同期
    Window_MenuStatus.prototype.synchroCursorStatusWindow = function(index) {
        const scene = SceneManager._scene;
        if (!scene._partyWideLookWindowKe) { return; }
        const statusWindow = scene._normalStatusWindowKe;
        const WideLookWindow = scene._partyWideLookWindowKe;
        // 通常ウインドウの場合
        if (this == statusWindow) {
            // カーソルセレクト
            cursorSelect(WideLookWindow, index)
        // 一覧ウインドウの場合
        } else if (this == WideLookWindow) {
            // カーソルセレクト
            cursorSelect(statusWindow, index)
        }
    };

    //- カーソルセレクト
    function cursorSelect(windo, index) {
        if (!windo) { return; }
        windo._index = index;
        windo.refreshCursor();
    };


    // ウインドウ・メニューステータス/ハンドラのセット(処理追加)
    const _Window_MenuStatus_setHandler = Window_MenuStatus.prototype.setHandler;
    Window_MenuStatus.prototype.setHandler = function(symbol, method) {
        _Window_MenuStatus_setHandler.apply(this, arguments);
        // ステータスウインドウのハンドラ同期
        this.synchroHandlerStatusWindowKe(symbol, method);
    };

    // ステータスウインドウのハンドラ同期
    Window_MenuStatus.prototype.synchroHandlerStatusWindowKe = function(symbol, method) {
        const scene = SceneManager._scene;
        if (!scene._partyWideLookWindowKe) { return; }
        const statusWindow = scene._normalStatusWindowKe;
        const WideLookWindow = scene._partyWideLookWindowKe;
        if (!statusWindow) { return; }
        // 通常ウインドウの場合
        if (this == statusWindow) {
            // ハンドラセット
            setHandler(WideLookWindow, symbol, method);
        // 一覧ウインドウの場合
        } else if (this == WideLookWindow) {
            // ハンドラセット
            setHandler(statusWindow, symbol, method);
        }
    };

    //- ハンドラセット
    function setHandler(windo, symbol, method) {
        windo._handlers[symbol] = method;
    };


    //- 一覧モード有効か
    function isValidWideLookMode(scene) {
        return scene.constructor.name == "Scene_Menu" && keke_validWideLookMode;
    };

    //- 一覧モードか
    function isWideLookMode(mode) {
        return $gameParty._menuPartyWideLookModeKe;
    };

    //- 常に一覧モードか
    function isWideLookAlways(scene) {
        return isValidWideLookMode(scene) && keke_wideLookModeAlways;
    };



    //==================================================
    //--  一覧モードの終了
    //==================================================

    //- シーンメニュー/終了(処理追加)
    const _Scene_Menu_terminate = Scene_Menu.prototype.terminate;
    Scene_Menu.prototype.terminate = function() {
        Scene_MenuBase.prototype.terminate.call(this);
        _Scene_Menu_terminate.apply(this);
        // 一覧ウインドウの破棄
        destroyWideLookWindow(this);
    };


    // 一覧ウインドウの破棄
    function destroyWideLookWindow(scene) {
        destroySprite(scene._normalStatusWindowKe);
        destroySprite(scene._partyWideLookWindowKe);
        scene._normalStatusWindowKe = null;
        scene._partyWideLookWindowKe = null;
    };



    //==================================================
    //--  控え半透明化の無効/バトラーマーク
    //==================================================

    //- メニューステータス/項目画像の描画(処理追加)
    const _Window_MenuStatus_drawItemImage =  Window_MenuStatus.prototype.drawItemImage;
    Window_MenuStatus.prototype.drawItemImage = function(index) {
        // 控え半透明化の無効
        if (keke_noReserveTranslucent) {
            NoTranslucent = true;
        }
        _Window_MenuStatus_drawItemImage.apply(this, arguments);
        NoTranslucent = false;
        // バトラーマークの描画
        drawBattlerMark(this, index);
    };

    //- バトラーマークの描画
    function drawBattlerMark(windo, index) {
        if (!keke_showBattlerMark) { return; }
        const menbersNum = $gameParty.members().length;
        const battleNum = $gameParty.maxBattleMembers();
        if (menbersNum <= battleNum) { return; }
        if (index >= battleNum) { return; }
        const cfg = keke_battlerMarkCfg;
        if (!cfg["表示"]) { return; }
        const actor = windo.actor(index);
        const rect = windo.itemRect(index);
        const text = cfg["テキスト"] || "Battler";
        const fontSize = cfg["文字サイズ"] || 14;
        const textColor = cfg["文字色"] || "rgba(255, 192, 0)";
        const outW =  cfg["縁取り幅"] || 6;
        const contents = windo.contents;
        // フォント設定のセーブ
        const fontSave = saveFontCfg(contents);
        // フォント設定
        contents.fontSize = fontSize;
        contents.textColor = textColor;
        contents.outlineWidth = outW;
        // テキスト幅
        const textW = contents.measureTextWidth(text);
        // 位置・サイズ
        const put = cfg["配置"] || "左下";
        const offsetX = cfg["ずらしX"] || 0;
        const offsetY = cfg["ずらしY"] || 0;
        const x = (put.includes("右") ? rect.x + rect.width - textW : rect.x) + offsetX;
        const y = (put.includes("下") ? rect.y + rect.height - fontSize : rect.y) + offsetY;
        // サイズ
        const width = rect.width;
        const height = fontSize;
        // 描画(顔アイコンがあればそちらに描画)
        if (!drawToFaceMake(actor, windo, text, textW, fontSize, outW, put, offsetX, offsetY)) {
            contents.drawText(text, x, y, width, height);
        }
        // フォント設定のロード
        loadFontCfg(contents, fontSave);
    };


    //- ウインドウ・メニューステータス/描画不透明度の変更
    const _Window_MenuStatus_changePaintOpacity = Window_MenuStatus.prototype.changePaintOpacity;
    Window_MenuStatus.prototype.changePaintOpacity = function(enabled) {
        // 控え半透明処理を適用
        if (NoTranslucent) { return; }
        _Window_MenuStatus_changePaintOpacity.apply(this, arguments);
    };



    //==================================================
    //--  アイコンバック
    //==================================================

    //- ウインドウベース/アイコンの描画(処理追加)
    const _Window_Base_drawIcon = Window_Base.prototype.drawIcon;
    Window_Base.prototype.drawIcon = function(iconIndex, x, y) {
        // アイコンバックの描画
        drawIconBack(this.contents, iconIndex, x, y);
        _Window_Base_drawIcon.apply(this, arguments);
    };

    //- アイコンバックの描画
    function drawIconBack(bitmap, iconIndex, x, y) {
        if (!iconIndex || !keke_showIconBack) { return; }
        const iw = ImageManager.iconWidth;
        const ih = ImageManager.iconHeight;
        // デザインを取得
        const design = keke_iconBackDesign;
        const backColor = design["バック色"] || "rgba(255, 255, 255, 1)";
        const outW = design["縁取り幅"] || 1.5;
        const outColor = design["縁取り色"] || "rgba(0, 0, 0, 1)";
        const round =  design["丸み"] || 10;
        // 描画
        fillSquare(bitmap, x, y, iw, ih, backColor, 0, round);
        strokeSquare(bitmap, x, y, iw, ih, outColor, outW, 0, round);
    };



    //==================================================
    //-- フォント基本 /ベーシック
    //==================================================

    //- フォント設定のセーブ
    function saveFontCfg(bitmap) {
        const save = {};
        save.fontSize = bitmap.fontSize;
        save.textColor = bitmap.textColor;
        save.outlineWidth = bitmap.outlineWidth;
        save.outlineColor = bitmap.outlineColor;
        return save;
    };

    //- フォント設定のロード
    function loadFontCfg(bitmap, save) {
        if (!save) { return; }
        bitmap.fontSize = save.fontSize;
        bitmap.textColor = save.textColor;
        bitmap.outlineWidth = save.outlineWidth;
        bitmap.outlineColor = save.outlineColor;
    };



    //==================================================
    //--  計算基本 /ベーシック
    //==================================================

    //- 数値を丸める
    function abbreviationValue(value, battler, type) {
        if (!value) { return value; }
        const str = value.toString();
        const length = str.length;
        // 無限とする値か判定
        if (battler) {
            const infinity = checkInfinityValue(battler, type);
            if (infinity) { return infinity; }
        }
        // 桁数に応じた判定
        if (length >= 13) {
            const cutEnd = length - 12;
            let head = str.slice(0, cutEnd);
            const restTop = str.slice(cutEnd, cutEnd + 1);
            if (Number(restTop) >= 5) { head = Number(head) + 1; }
            return `${head}兆`
        } else if (length >= 9) {
            const cutEnd = length - 8;
            let head = str.slice(0, cutEnd);
            const restTop = str.slice(cutEnd, cutEnd + 1);
            if (Number(restTop) >= 5) { head = Number(head) + 1; }
            return `${head}億`
        } else if (length >= 7) {
            const cutEnd = length - 4;
            let head = str.slice(0, cutEnd);
            const restTop = str.slice(cutEnd, cutEnd + 1);
            if (Number(restTop) >= 5) { head = Number(head) + 1; }
            return `${head}万`
        }
        return `${value}`
    };

    //- 無限とする値か判定
    function checkInfinityValue(battler, type) {
        const gt = $gameTemp;
        // 無限に関する設定がなければリターン
        if (!gt._infinityValueKe || !gt._infinityWordKe) { return null; }
        // 無限にする値か判定
        if (getBaseParam(battler, type) == gt._infinityValueKe) {
            return gt._infinityWordKe;
        }
        return null;
    };

    //- ベースパラムの取得
    function getBaseParam(battler, type) {
        if (type.match(/hp|mp/i)) {
            return battler.paramBasePlus(getParamId(type));
        } else {
            return battler.maxTp();
        }
    };

    //- パラムIDの取得
    function getParamId(type) {
        if (type.match(/hp/i)) { return 0; } else
        if (type.match(/mp/i)) { return 1; } else
        { return null; }
    };

    //- 時間の作成
    function makeTime(time) {
        if (!time) { return 0; }
        time = time.toString();
        return Math.round(Number(time.match(/(\d+\.?\d*)/)[0]) * (time.match(/s/i) ? 60 : 1));
    };



    //==================================================
    //--  追加スプライト /ベーシック
    //==================================================
    
    //- 破棄付きスプライト
    function SpriteKeMncf() {
        this.initialize(...arguments);
    }

    SpriteKeMncf.prototype = Object.create(Sprite.prototype);
    SpriteKeMncf.prototype.constructor = SpriteKeMncf;

    SpriteKeMncf.prototype.destroy = function() {
        if (this.bitmap && !this.bitmap._url) { this.bitmap.destroy(); }
        Sprite.prototype.destroy.apply(this);
    };


    //-  破棄付きクリッカブルスプライト
    function Sprite_ClickableKeMncf() {
        this.initialize(...arguments);
    }
    
    Sprite_ClickableKeMncf.prototype = Object.create(Sprite_Clickable.prototype);
    Sprite_ClickableKeMncf.prototype.constructor = Sprite_ClickableKeMncf;
    
    Sprite_ClickableKeMncf.prototype.destroy = function() {
        if (this.bitmap && !this.bitmap._url) { this.bitmap.destroy(); }
        Sprite.prototype.destroy.apply(this);
    };
    
    //- ハンドラのセット
    Sprite_ClickableKeMncf.prototype.setHandler = function(method) {
        this._clickHandler = method;
    };



    //==================================================
    //--  スワイプ /ベーシック
    //==================================================

    //- スワイプパラムの初期化
    function initSwipeParam(sprite) {
        let p = {};
        p.touchXPre = null;
        p.touchYPre = null;
        p.swipeX = null;
        p.swipeY = null;
        p.swipeXs = null;
        p.swipeYs = [];
        p.swipeTotalX = 0;
        p.swipeTotalY = 0;
        p.swipeDireX = 0;
        p.xSwiped = false;
        sprite._swipeParamKe = p;
    };

    //- タッチスワイプの更新
    function updateTouchSwipe(sprite, p) {
        if (!isPressedSprite(sprite) || !p) {
            p.touchXPre = null;
            p.touchYPre = null;
            return false;
        }
        // スワイプ量の取得
        getSwipeVol(sprite, p);
        return true;
    };

    //- スワイプ量の取得
    function getSwipeVol(sprite, p) {
        if (p.touchXPre) {
            const playTime = TouchInput._mousePressed ? 0 : 50;
            const swipeX = TouchInput.x - p.touchXPre;
            if (swipeX) {
                addSwipeX(p, swipeX);
                if (sprite._initSwipeXKe) { clearTimeout(sprite._initSwipeXKe); }
            } else {
                p.swipeX = null;
                sprite._initSwipeXKe = setTimeout(initSwipeVol, playTime, p, "x");
            }
            const swipeY = TouchInput.y - p.touchYPre;
            if (swipeY) {
                addSwipeY(p, swipeY);
                if (sprite._initSwipeYKe) { clearTimeout(sprite._initSwipeYKe); }
            } else {
                p.swipeY = null;
                sprite._initSwipeYKe = setTimeout(initSwipeVol, playTime, p, "y");
            }
        }
        p.touchXPre = TouchInput.x;
        p.touchYPre = TouchInput.y;
    };

    //- スワイプ量の初期化
    function initSwipeVol(p, xy) {
        if (xy == "x") {
            p.swipeXs = null;
        } else {
            p.swipeYs = null;
        }
    };

    //- スワイプXの追加
    function addSwipeX(p, v) {
        if (!p.swipeXs) { p.swipeXs = []; }
        p.swipeX = v;
        p.swipeXs.unshift(v);
        if (p.swipeXs.length > 2) {
            p.swipeXs.pop();
        }
    };

    //- スワイプYの追加
    function addSwipeY(p, v) {
        if (!p.swipeYs) { p.swipeYs = []; }
        p.swipeY = v;
        p.swipeYs.unshift(v);
        if (p.swipeYs.length > 2) {
            p.swipeYs.pop();
        }
    };

    //- スプライトタッチ中か
    function isPressedSprite(sprite) {
        if (!sprite || !sprite.parent) { return false; }
        if (sprite.worldTransform && sprite.isBeingTouched()) {
            sprite._isPressedKe = true;
        }
        if (sprite._isPressedKe && !(TouchInput.isPressed() || TouchInput._touchMovedKe)) {
            sprite._isPressedKe = false;
        }
        return sprite._isPressedKe;
    };

    //- タッチ移動時にタッチ移動フラグをオン(処理追加)
    const _TouchInput_onTouchMove = TouchInput._onTouchMove;
    TouchInput._onTouchMove = function(event) {
        _TouchInput_onTouchMove.apply(this, arguments);
        this._touchMovedKe = true;
    };

    //- タッチ終了時にタッチ移動フラグをオフ(処理追加)
    const _TouchInput_onTouchEnd = TouchInput._onTouchEnd;
    TouchInput._onTouchEnd = function(event) {
        _TouchInput_onTouchEnd.apply(this, arguments);
        this._touchMovedKe = false;
    };



    //==================================================
    //--  操作モード切り替え /ベーシック
    //==================================================

    if (!Scene_Base.prototype.updateInputModeKe) {

    //-　操作モードの更新 呼び出し(処理追加)
    const _Scene_Base_update = Scene_Base.prototype.update;
    Scene_Base.prototype.update = function() {
        _Scene_Base_update.apply(this);
        // 操作モードの更新
        updateInputMode(this);
    };

    //-　操作モードの更新
    function updateInputMode(scene) {
        // タッチ操作したか
        isTouchInput(scene);
        // キー操作したか
        isKeyInput();  
    };

    //- タッチ操作したか
    function isTouchInput(scene) {
        let ok = false;
        let touchMoved = false;
        if (TouchInput.x != scene._touchXPreKeIpmd) { touchMoved = true; }
        if (TouchInput.y != scene._touchYPreKeIpmd) { touchMoved = true; }
        if (touchMoved) {
            if (!scene._touchCountKeIpmd) { scene._touchCountKeIpmd = 0; }
            scene._touchCountKeIpmd++;
            if (scene._touchCountKeIpmd >= 5) {
                ok = true;
                scene._touchCountKeIpmd = 0;
            }
        } else {
            scene._touchCountKeIpmd = 0;
        }
        if (TouchInput.isTriggered()) { ok = true; }
        if (TouchInput.isCancelled()) { ok = true; }
        if (ok) {
            $gameTemp._inputModeKe = TouchInput._screenPressed ? "touch" : "mouse";
        }
        scene._touchXPreKeIpmd = TouchInput.x;
        scene._touchYPreKeIpmd = TouchInput.y;
    };

    //- キー操作したか
    function isKeyInput(scene) {
        if (Input.isTriggered("up") || Input.isTriggered("down") || Input.isTriggered("left") || Input.isTriggered("right") || 
         Input.isPressed("ok") || Input.isPressed("cancel") || Input.isPressed("shift")) {
            $gameTemp._inputModeKe = "key";
        }
    };

    }


    //- キーモードか
    function isKeyMode() {
        return $gameTemp._inputModeKe == "key";
    };

    //- マウスモードか
    function isMouseMode() {
        return $gameTemp._inputModeKe == "mouse";
    };

    //- タッチモードか
    function isTouchMode() {
        return $gameTemp._inputModeKe == "touch";
    };

    //- タッチモード系か
    function isTouchishMode() {
        return $gameTemp._inputModeKe.match(/touch|mouse/i);
    };



    //==================================================
    //--  図形描画 /ベーシック
    //==================================================
    
    //- スクエアの塗り潰し
    function fillSquare(bitmap, x, y, w, h, color = "rgba(0,0,0,1)", roundLine = 0, roundEdge = 0, corner = "") {
        const context = bitmap.context;
        context.save();
        if (Array.isArray(color)) {
            const x1 = x + w;
            const y1 = y + h;
            const grad = context.createLinearGradient(x, y, x1, y1);
            grad.addColorStop(0, color[0]);
            grad.addColorStop(1, color[1]);
            context.fillStyle = grad;
        } else {
            context.fillStyle = color;
        }
        designSquare(bitmap, x, y, w, h, roundLine, roundEdge, corner);
        context.fill();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    //- スクエアの線画
    function strokeSquare(bitmap, x, y, w, h, color = "rgba(0,0,0,1)", lineW = 1,  roundLine = 0, roundEdge = 0, corner = "") {
        const context = bitmap.context;
        context.strokeStyle = color;
        context.lineWidth = lineW;
        designSquare(bitmap, x, y, w, h, roundLine, roundEdge, corner, lineW);
        context.stroke();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    //- スクエアのデザイン
    function designSquare(bitmap, x, y, w, h, roundLine = 0, roundEdge = 0, corner = "", lineW = 0, airUp) {
        const context = bitmap.context;
        context.beginPath();
        const x2 = x + w / 2;
        const y2 = y + h / 2;
        const x3 = x + w;
        const y3 = y + h;
        const c1 = corner.includes("1") ? 0 : roundEdge;    // 左上
        const c2 = corner.includes("2") ? 0 : roundEdge;    // 左下
        const c3 = corner.includes("3") ? 0 : roundEdge;    // 右上
        const c4 = corner.includes("4") ? 0 : roundEdge;    // 右下
        context.moveTo(x + c1,  y);
        // 右上
        if (roundLine && !airUp) {
            context.quadraticCurveTo(x2,  y + roundLine,  x3 - c3,  y);
        } else {
            context.lineTo(x3 - c3,  y);
        }
        context.quadraticCurveTo(x3,  y,  x3,  y + c3);
        // 右下
        if (roundLine) {
            context.quadraticCurveTo(x3 - roundLine,  y2,  x3,  y3 - c4);
        } else {
            context.lineTo(x3,  y3 - c4);
        }
        context.quadraticCurveTo(x3,  y3,  x3 - c4,  y3);
        // 左下
        if (roundLine) {
            context.quadraticCurveTo(x2,  y3 - roundLine,  x + c2,  y3);
        } else {
            context.lineTo(x + c2,  y3);
        }
        context.quadraticCurveTo(x,  y3,  x,  y3 - c2);
        // 左上
        if (roundLine) {
            context.quadraticCurveTo(x + roundLine,  y2,  x,  y + c1);
        } else {
            context.lineTo(x,  y + c1);
        }
        if (c1) {
            context.quadraticCurveTo(x,  y,  x + c1,  y);
        } else {
            context.lineTo(x,  y - lineW / 2);
        }
    };

    //- ギザギザの塗り潰し
    function fillGiza(bitmap, x, y, width, height, color = "rgba(0,0,0,1)", shape = 1) {
        const context = bitmap.context;
        context.save();
        context.fillStyle = color;
        designGiza(bitmap, x, y, width, height, shape);
        context.fill();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    //- ギザギザの線画
    function strokeGiza(bitmap, x, y, width, height, color = "rgba(0,0,0,1)", lineW = 1, shape = 1) {
        const context = bitmap.context;
        context.strokeStyle = color;
        context.lineWidth = lineW;
        designGiza(bitmap, x, y, width, height, shape);
        context.stroke();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    //- ギザギザのデザイン
    let gizaXNum = null;
    let gizaOuts = [];
    
    function designGiza(bitmap, x, y, width, height, shape = 1) {
        const context = bitmap.context;
        context.beginPath();
        const outs = gizaOuts;
        let rand = null;
        width -= x * 2;
        height -= y * 2;
        const xOut = Math.min(width / 4, 80);
        const yOut = Math.min(height / 4, 80);
        rand = gizaXNum ? gizaXNum : 50 + Math.randomInt(50);
        const xNum = Math.max(Math.floor((width - xOut * 2) / 100), 2);
        gizaXNum = rand;
        const yNum = Math.max(Math.floor((height - yOut * 2) / 50), 2);
        const r1 = 0.5;
        const r2 = 0.5;
        const xDiv = (width - xOut * 2) / xNum;
        const yDiv = (height - yOut * 2) / yNum;
        let nowX = x + xOut + xDiv / 2;
        let nowY = y + yOut;
        let newRandoms = [];
        context.moveTo(nowX, nowY);
        if (!shape) {
            // 上
            for (let i = 0; i < xNum - 1; i++) {
                rand = outs.length ? outs.shift() : yOut * r1 + Math.randomInt(yOut * r2);
                context.lineTo(nowX + xDiv / 2, nowY - rand);
                context.lineTo(nowX + xDiv, nowY);
                nowX += xDiv;
                newRandoms.push(rand);
            }
            // 右上
            context.lineTo(nowX + xDiv / 2 + xOut / 3, nowY - yOut / 3);
            context.lineTo(nowX + xDiv / 2, nowY + yDiv / 2);
            nowX += xDiv / 2;
            nowY += yDiv / 2;
            // 右
            for (let i = 0; i < yNum - 1; i++) {
                rand = outs.length ? outs.shift() : xOut * r1 + Math.randomInt(xOut * r2);
                context.lineTo(nowX + rand, nowY + yDiv / 2);
                context.lineTo(nowX, nowY + yDiv);
                nowY += yDiv;
                newRandoms.push(rand);
            }
            // 右下
            context.lineTo(nowX + xOut / 3, nowY + yDiv / 2 + yOut / 3);
            context.lineTo(nowX - xDiv / 2, nowY + yDiv / 2);
            nowX -= xDiv / 2;
            nowY += yDiv / 2;
            // 下
            for (let i = 0; i < xNum - 1; i++) {
                rand = outs.length ? outs.shift() : yOut * r1 + Math.randomInt(yOut * r2);
                context.lineTo(nowX - xDiv / 2, nowY + rand);
                context.lineTo(nowX - xDiv, nowY);
                nowX -= xDiv;
                newRandoms.push(rand);
            }
            // 左下
            context.lineTo(nowX - xDiv / 2 - xOut / 3, nowY + yOut / 3);
            context.lineTo(nowX - xDiv / 2, nowY - yDiv / 2);
            nowX -= xDiv / 2;
            nowY -= yDiv / 2;
            // 左
            for (let i = 0; i < yNum - 1; i++) {
                rand = outs.length ? outs.shift() : xOut * r1 + Math.randomInt(xOut * r2);
                context.lineTo(nowX - rand, nowY - yDiv / 2);
                context.lineTo(nowX, nowY - yDiv);
                nowY -= yDiv;
                newRandoms.push(rand);
            }
            // 左上
            context.lineTo(nowX - xOut / 3, nowY - yDiv / 2 - yOut / 3);
            context.lineTo(nowX + xDiv / 2, nowY - yDiv / 2);
            nowX += xDiv / 2;
            nowY -= yDiv / 2;
            gizaOuts = newRandoms;
            return
        }
        // 上
        for (let i = 0; i < xNum - 1; i++) {
            rand = outs.length ? outs.shift() : yOut / 2 + Math.randomInt(yOut / 2);
            context.quadraticCurveTo(nowX + xDiv / 2, nowY - yOut, nowX + xDiv / 2, nowY - rand);
            context.quadraticCurveTo(nowX + xDiv / 2, nowY, nowX + xDiv, nowY);
            nowX += xDiv;
        }
        // 右上
        context.quadraticCurveTo(nowX + xOut / 2, nowY + yDiv / 2 - yOut / 2, nowX + xDiv / 2 + xOut / 3, nowY - yOut / 3);
        context.quadraticCurveTo(nowX + xDiv / 2, nowY + yDiv / 2, nowX + xDiv / 2, nowY + yDiv / 2);
        nowX += xDiv / 2;
        nowY += yDiv / 2;
        // 右
        for (let i = 0; i < yNum - 1; i++) {
            rand = outs.length ? outs.shift() : xOut / 2 + Math.randomInt(xOut / 2);
            context.quadraticCurveTo(nowX + rand, nowY + yDiv / 2, nowX + xOut, nowY + yDiv / 2);
            context.quadraticCurveTo(nowX, nowY + yDiv, nowX, nowY + yDiv);
            nowY += yDiv;
        }
        // 右下
        context.quadraticCurveTo(nowX + xOut / 2, nowY + yOut / 2, nowX + xOut / 3, nowY + yDiv / 2 + yOut / 3);
        context.quadraticCurveTo(nowX, nowY + yDiv / 2, nowX - xDiv / 2, nowY + yDiv / 2);
        nowX -= xDiv / 2;
        nowY += yDiv / 2;
        // 下
        for (let i = 0; i < xNum - 1; i++) {
            rand = outs.length ? outs.shift() : yOut / 2 + Math.randomInt(yOut / 2);
            context.quadraticCurveTo(nowX - xDiv / 2, nowY + yOut, nowX - xDiv / 2, nowY + rand);
            context.quadraticCurveTo(nowX - xDiv / 2, nowY, nowX - xDiv, nowY);
            nowX -= xDiv;
        }
        // 左下
        context.quadraticCurveTo(nowX - xOut / 2, nowY - yDiv / 2 + yOut / 2, nowX - xDiv / 2 - xOut / 3, nowY + yOut / 3);
        context.quadraticCurveTo(nowX - xDiv / 2, nowY - yDiv / 2, nowX - xDiv / 2, nowY - yDiv / 2);
        nowX -= xDiv / 2;
        nowY -= yDiv / 2;
        // 左
        for (let i = 0; i < yNum - 1; i++) {
            rand = outs.length ? outs.shift() : xOut / 2 + Math.randomInt(xOut / 2);
            context.quadraticCurveTo(nowX - xOut, nowY - yDiv / 2, nowX - rand, nowY - yDiv / 2);
            context.quadraticCurveTo(nowX, nowY - yDiv, nowX, nowY - yDiv);
            nowY -= yDiv;
        }
        // 左上
        context.quadraticCurveTo(nowX - xOut / 2, nowY - yOut / 2, nowX - xOut / 3, nowY - yDiv / 2 - yOut / 3);
        context.quadraticCurveTo(nowX, nowY - yDiv / 2, nowX + xDiv / 2, nowY - yDiv / 2);
        nowX += xDiv / 2;
        nowY -= yDiv / 2;
        gizaOuts = newRandoms;
    };

})();