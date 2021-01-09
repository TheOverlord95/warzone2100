#ifndef __INCLUDED_SRC_HCI_OBJECTS_STATS_INTERFACE_H__
#define __INCLUDED_SRC_HCI_OBJECTS_STATS_INTERFACE_H__

#include <vector>
#include "../hci.h"
#include "../intdisplay.h"

class StatsForm;

class BaseObjectsStatsController
{
public:
	virtual ~BaseObjectsStatsController() = default;

	size_t objectsSize()
	{
		return objects.size();
	}

	virtual size_t statsSize() const = 0;

	BASE_OBJECT *getSelectedObject() const
	{
		return intGetSelectedObject();
	}

	void setSelectedObject(BASE_OBJECT *value)
	{
		intSetSelectedObject(value);
	}

	const std::vector<BASE_OBJECT *> &getObjects() const
	{
		return objects;
	}

	BASE_OBJECT *getObjectAt(size_t index) const
	{
		return objects.at(index);
	}

	virtual BASE_STATS *getObjectStatsAt(size_t index) const = 0;
	virtual BASE_STATS *getStatsAt(size_t index) const = 0;
	virtual void refresh() = 0;

protected:
	std::vector<BASE_OBJECT *> objects;
};

class DynamicIntFancyButton: public IntFancyButton
{
protected:
	virtual bool isSelected() const = 0;
	void updateSelection();
};

class StatsButton: public DynamicIntFancyButton
{
protected:
	virtual BASE_STATS *getStats() = 0;

	void display(int xOffset, int yOffset) override;
};

class StatsFormButton : public StatsButton
{
public:
	void setStatsForm(const std::shared_ptr<StatsForm> &value)
	{
		statsForm = value;
	}
protected:
	std::weak_ptr<StatsForm> statsForm;
};

class ObjectStatsButton : public StatsButton
{
public:
	ObjectStatsButton(const std::shared_ptr<BaseObjectsStatsController> &controller, size_t objectIndex)
		: StatsButton()
		, controller(controller)
		, objectIndex(objectIndex)
	{
		buttonType = TOPBUTTON;
	}

protected:
	BASE_STATS *getStats() override
	{
		return controller->getObjectStatsAt(objectIndex);
	}

	bool isSelected() const override
	{
		return controller->getObjectAt(objectIndex) == controller->getSelectedObject();
	}

	std::shared_ptr<BaseObjectsStatsController> controller;
	size_t objectIndex;
};

class ObjectsForm: public IntFormAnimated
{
protected:
	ObjectsForm(const std::shared_ptr<BaseObjectsStatsController> &controller):
		IntFormAnimated(false),
		controller(controller)
	{
	}

	void run(W_CONTEXT *) override;
	void initialize();
	void addCloseButton();
	void addTabList();
	void updateButtons();
	void addNewButton();
	void removeLastButton();
	virtual std::shared_ptr<ObjectStatsButton> makeStatsButton(size_t buttonIndex) const = 0;
	virtual std::shared_ptr<IntFancyButton> makeObjectButton(size_t buttonIndex) const = 0;

	std::shared_ptr<BaseObjectsStatsController> controller;
	std::shared_ptr<IntListTabWidget> objectsList;
	size_t buttonsCount = 0;
};

class StatsForm: public IntFormAnimated
{
private:
	typedef IntFormAnimated BaseWidget;
public:
	BASE_STATS *getSelectedStats() const
	{
		return selectedObjectStats;
	}
protected:
	StatsForm(const std::shared_ptr<BaseObjectsStatsController> &controller):
		IntFormAnimated(false),
		controller(controller)
	{
	}

	void display(int xOffset, int yOffset) override;
	virtual void initialize();
	void addCloseButton();
	void addTabList();
	void updateSelectedObjectStats();
	void updateButtons();
	void addNewButton();
	void removeLastButton();
	virtual std::shared_ptr<StatsFormButton> makeOptionButton(size_t buttonIndex) const = 0;

	std::shared_ptr<BaseObjectsStatsController> controller;
	std::shared_ptr<IntListTabWidget> optionList;
	size_t buttonsCount = 0;
	BASE_STATS *selectedObjectStats = nullptr;
};

#endif // __INCLUDED_SRC_HCI_OBJECTS_STATS_INTERFACE_H__
