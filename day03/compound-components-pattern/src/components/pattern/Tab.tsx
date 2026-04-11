import {
  Children,
  cloneElement,
  isValidElement,
  useId,
  useState,
  type ButtonHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

interface SharedTabProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  tabGroupId: string;
}

const getSharedTabProps = (props: Partial<SharedTabProps>) => {
  if (
    typeof props.activeTab !== "string" ||
    typeof props.setActiveTab !== "function" ||
    typeof props.tabGroupId !== "string"
  ) {
    throw new Error("Tab compound components must be used inside Tab.");
  }

  return props as SharedTabProps;
};

interface TabProps {
  children: ReactNode;
  defaultTab: string;
}

const TabList = ({ children }: { children: ReactNode }) => {
  return (
    <div className="tab-list" role="tablist">
      {children}
    </div>
  );
};

interface TabButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "id"> {
  tabId: string;
  children: ReactNode;
  activeTab?: string;
  setActiveTab?: (tabId: string) => void;
  tabGroupId?: string;
}

const TabButton = ({
  tabId,
  children,
  className,
  onClick,
  activeTab,
  setActiveTab,
  tabGroupId,
  ...props
}: TabButtonProps) => {
  const sharedTabProps = getSharedTabProps({
    activeTab,
    setActiveTab,
    tabGroupId,
  });
  const isActive = sharedTabProps.activeTab === tabId;
  const triggerId = `${sharedTabProps.tabGroupId}-${tabId}-trigger`;
  const panelId = `${sharedTabProps.tabGroupId}-${tabId}-panel`;

  return (
    <button
      {...props}
      id={triggerId}
      type="button"
      className={["tab-button", className].filter(Boolean).join(" ")}
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      data-active={isActive}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          sharedTabProps.setActiveTab(tabId);
        }
      }}
    >
      {children}
    </button>
  );
};

interface TabPanelProps {
  tabId: string;
  children: ReactNode;
  activeTab?: string;
  tabGroupId?: string;
}

const TabPanel = ({
  tabId,
  children,
  activeTab,
  tabGroupId,
}: TabPanelProps) => {
  const sharedTabProps = getSharedTabProps({
    activeTab,
    setActiveTab: () => undefined,
    tabGroupId,
  });

  if (sharedTabProps.activeTab !== tabId) {
    return null;
  }

  return (
    <div
      id={`${sharedTabProps.tabGroupId}-${tabId}-panel`}
      className="tab-panel"
      role="tabpanel"
      aria-labelledby={`${sharedTabProps.tabGroupId}-${tabId}-trigger`}
    >
      {children}
    </div>
  );
};

const injectTabProps = (
  children: ReactNode,
  sharedTabProps: SharedTabProps,
): ReactNode => {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child;
    }

    if (child.type === TabButton) {
      return cloneElement(child as ReactElement<TabButtonProps>, sharedTabProps);
    }

    if (child.type === TabPanel) {
      return cloneElement(child as ReactElement<TabPanelProps>, sharedTabProps);
    }

    const element = child as ReactElement<{ children?: ReactNode }>;

    if (element.props.children === undefined) {
      return child;
    }

    return cloneElement(
      element,
      undefined,
      injectTabProps(element.props.children, sharedTabProps),
    );
  });
};

const TabRoot = ({ children, defaultTab }: TabProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const tabGroupId = useId();

  return (
    <div className="tab-wrapper">
      {injectTabProps(children, { activeTab, setActiveTab, tabGroupId })}
    </div>
  );
};

const Tab = Object.assign(TabRoot, {
  List: TabList,
  Button: TabButton,
  Panel: TabPanel,
});

export default Tab;
