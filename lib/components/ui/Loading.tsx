import { ReactNode } from "react";

const Loading = ({ children }: { children: ReactNode }) => {
  return (
    <div
      id="loading-overlay"
      className="
                fixed inset-0 
                flex items-center justify-center 
                z-50 
                bg-gray-100 bg-opacity-80 
            "
    >
      <div
        className="
                    animate-spin          /* 継続的な回転アニメーション */
                    rounded-full          /* 完全な円形 */
                    h-20 w-20             /* サイズ設定 (80px x 80px) */
                    border-4              /* 全ての境界線の太さ */
                    gray-700   /* 上側の境界線の色 (主要な色) */
                    gray-700   /* 下側の境界線の色 */
                    border-l-transparent  /* 左側を透明にしてドーナツ型を作成 */
                    border-r-transparent  /* 右側を透明に */
                    shadow-lg             /* 軽い影を追加 */
                "
        role="status" /* アクセシビリティ対応 */
        aria-label="Loading"
      />
      <div className="absolute mt-40 gray-700 text-xl font-semibold">
        {children}
      </div>
    </div>
  );
};

export default Loading;
