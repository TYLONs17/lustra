import * as React from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------------------
   THEME + CONFIG
--------------------------------------------- */

const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
    theme?: Record<keyof typeof THEMES, string>;
  }
>;

type ChartContextValue = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextValue | null>(null);

function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) {
    throw new Error("useChart must be used within <ChartContainer>");
  }
  return ctx;
}

/* ---------------------------------------------
   CONTAINER
--------------------------------------------- */

type ChartContainerProps = React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ReactNode;
};

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ id, className, children, config, ...props }, ref) => {
    const reactId = React.useId();
    const chartId = `chart-${id ?? reactId.replace(/:/g, "")}`;

    return (
      <ChartContext.Provider value={{ config }}>
        <div
          ref={ref}
          data-chart={chartId}
          className={cn(
            "flex aspect-video justify-center text-xs",
            className
          )}
          {...props}
        >
          <ChartStyle id={chartId} config={config} />
          {children}
        </div>
      </ChartContext.Provider>
    );
  }
);

ChartContainer.displayName = "ChartContainer";

/* ---------------------------------------------
   STYLE INJECTION
--------------------------------------------- */

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const entries = Object.entries(config).filter(
    ([, v]) => v.color || v.theme
  );

  if (!entries.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(([theme, prefix]) => {
            const vars = entries
              .map(([key, item]) => {
                const color =
                  item.theme?.[theme as keyof typeof item.theme] ??
                  item.color;
                return color ? `--color-${key}: ${color};` : null;
              })
              .filter(Boolean)
              .join("\n");

            return `${prefix} [data-chart="${id}"] { ${vars} }`;
          })
          .join("\n"),
      }}
    />
  );
}

/* ---------------------------------------------
   TOOLTIP (NO RECHARTS TYPES)
--------------------------------------------- */

type TooltipPayloadItem = {
  name?: string;
  value?: number;
  color?: string;
  payload?: Record<string, unknown>;
};

type ChartTooltipContentProps = React.ComponentProps<"div"> & {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: React.ReactNode;
  hideLabel?: boolean;
};

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
>(({ active, payload, label, hideLabel, className }, ref) => {
  const { config } = useChart();

  if (!active || !payload?.length) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-background px-2 py-1 text-xs shadow",
        className
      )}
    >
      {!hideLabel && label && (
        <div className="mb-1 font-medium">{label}</div>
      )}

      <div className="grid gap-1">
        {payload.map((item, i) => {
          const key = String(item.name ?? i);
          const cfg = config[key];

          return (
            <div key={key} className="flex justify-between gap-2">
              <span className="text-muted-foreground">
                {cfg?.label ?? item.name}
              </span>
              {typeof item.value === "number" && (
                <span className="font-mono">
                  {item.value.toLocaleString()}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});

ChartTooltipContent.displayName = "ChartTooltipContent";

/* ---------------------------------------------
   LEGEND (NO RECHARTS TYPES)
--------------------------------------------- */

type LegendItem = {
  value?: string;
  color?: string;
};

type ChartLegendContentProps = React.ComponentProps<"div"> & {
  payload?: LegendItem[];
};

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  ChartLegendContentProps
>(({ payload, className }, ref) => {
  const { config } = useChart();

  if (!payload?.length) return null;

  return (
    <div
      ref={ref}
      className={cn("flex justify-center gap-4 text-xs", className)}
    >
      {payload.map((item, i) => {
        const cfg = item.value ? config[item.value] : undefined;

        return (
          <div key={i} className="flex items-center gap-1.5">
            <span
              className="h-2 w-2 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            {cfg?.label ?? item.value}
          </div>
        );
      })}
    </div>
  );
});

ChartLegendContent.displayName = "ChartLegendContent";

/* ---------------------------------------------
   EXPORTS
--------------------------------------------- */

export {
  ChartContainer,
  ChartStyle,
  ChartTooltipContent,
  ChartLegendContent,
};
