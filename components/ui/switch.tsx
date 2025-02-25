// "use client";

// import * as SwitchPrimitive from "@radix-ui/react-switch";
// import { MoonIcon, SunIcon } from "lucide-react";
// import { useTheme } from "next-themes";
// import * as React from "react";

// import { cn } from "@/lib/utils";

// function Switch({
//   className,
//   onCheckedChange,
//   checked: controlledChecked,
//   defaultChecked,
//   ...props
// }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
//   const { setTheme } = useTheme();

//   // Use internal state only if not controlled externally
//   const [internalChecked, setInternalChecked] = React.useState(
//     defaultChecked || false
//   );

//   // Use controlled state if provided, otherwise use internal state
//   const isChecked =
//     controlledChecked !== undefined ? controlledChecked : internalChecked;

//   const handleCheckedChange = (newChecked: boolean) => {
//     // Update internal state if not controlled
//     if (controlledChecked === undefined) {
//       setInternalChecked(newChecked);
//     }

//     // Call the external handler if provided
//     if (onCheckedChange) {
//       onCheckedChange(newChecked);
//     }

//     // Change the theme based on the switch state
//     setTheme(newChecked ? "dark" : "light");
//   };

//   return (
//     <SwitchPrimitive.Root
//       data-slot="switch"
//       checked={isChecked}
//       defaultChecked={defaultChecked}
//       onCheckedChange={handleCheckedChange}
//       className={cn(
//         "peer relative inline-flex h-6 w-12 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
//         "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
//         className
//       )}
//       {...props}
//     >
//       <SwitchPrimitive.Thumb
//         data-slot="switch-thumb"
//         className={cn(
//           "pointer-events-none block size-5 rounded-full bg-background ring-0 shadow-lg transition-transform relative",
//           "data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0"
//         )}
//       >
//         <div className="absolute inset-0 flex items-center justify-center">
//           {/* Sun icon visible when unchecked */}
//           <SunIcon
//             className={cn(
//               "h-3 w-3 absolute transition-opacity duration-200",
//               isChecked ? "opacity-0" : "opacity-100"
//             )}
//             style={{ color: "orange" }}
//           />

//           {/* Moon icon visible when checked */}
//           <MoonIcon
//             className={cn(
//               "h-3 w-3 absolute transition-opacity duration-200",
//               isChecked ? "opacity-100" : "opacity-0"
//             )}
//             style={{ color: "blue" }}
//           />
//         </div>
//       </SwitchPrimitive.Thumb>
//     </SwitchPrimitive.Root>
//   );
// }

// export { Switch };


"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { cn } from "@/lib/utils";

function Switch({
  className,
  onCheckedChange,
  checked: controlledChecked,
  defaultChecked,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const { theme, setTheme } = useTheme();
  
  // Initialize internal state based on current theme (if available)
  const [internalChecked, setInternalChecked] = React.useState(
    defaultChecked || false
  );
  
  // Sync switch state with actual theme when component mounts or theme changes
  React.useEffect(() => {
    if (theme) {
      const isDark = theme === "dark";
      // Only update internal state if not controlled externally
      if (controlledChecked === undefined) {
        setInternalChecked(isDark);
      }
    }
  }, [theme, controlledChecked]);

  // Use controlled state if provided, otherwise use internal state
  const isChecked =
    controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleCheckedChange = (newChecked: boolean) => {
    // Update internal state if not controlled
    if (controlledChecked === undefined) {
      setInternalChecked(newChecked);
    }

    // Call the external handler if provided
    if (onCheckedChange) {
      onCheckedChange(newChecked);
    }

    // Change the theme based on the switch state
    setTheme(newChecked ? "dark" : "light");
  };

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      checked={isChecked}
      defaultChecked={defaultChecked}
      onCheckedChange={handleCheckedChange}
      className={cn(
        "peer relative inline-flex h-6 w-12 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-5 rounded-full bg-background ring-0 shadow-lg transition-transform relative",
          "data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0"
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Sun icon visible when unchecked */}
          <SunIcon
            className={cn(
              "h-3 w-3 absolute transition-opacity duration-200",
              isChecked ? "opacity-0" : "opacity-100"
            )}
            style={{ color: "orange" }}
          />

          {/* Moon icon visible when checked */}
          <MoonIcon
            className={cn(
              "h-3 w-3 absolute transition-opacity duration-200",
              isChecked ? "opacity-100" : "opacity-0"
            )}
            style={{ color: "blue" }}
          />
        </div>
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };